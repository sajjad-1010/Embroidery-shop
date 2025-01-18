const UserModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    // Register a new user
    async register(req, res) {
        try {
            const { name, email, password } = req.body;

            // Check if email already exists
            const existingUser = await UserModel.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ error: 'Email is already registered' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create the user
            const newUser = await UserModel.create({
                name,
                email,
                password: hashedPassword,
            });

            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Authenticate a user
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Find the user by email
            const user = await UserModel.findOne({ where: { email } });

            // Validate user and password
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            // Generate a JWT token
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret_key', {
                expiresIn: '1h',
            });

            res.status(200).json({ message: 'Login successful', token });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Get user profile by ID
    async getProfile(req, res) {
        try {
            const userId = req.params.id;

            // Fetch the user profile
            const user = await UserModel.findByPk(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Update user profile
    async updateProfile(req, res) {
        try {
            const userId = req.params.id;
            const updateData = req.body;

            // Update the user's information
            const [updatedRows] = await UserModel.update(updateData, { where: { id: userId } });

            if (updatedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Fetch the updated user
            const updatedUser = await UserModel.findByPk(userId);
            res.status(200).json({ message: 'User updated successfully', user: updatedUser });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Delete user profile
    async deleteProfile(req, res) {
        try {
            const userId = req.params.id;

            // Check if the user exists
            const user = await UserModel.findByPk(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Delete the user
            await UserModel.destroy({ where: { id: userId } });
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Find all user profiles
    async findAllProfile(req, res) {
        try {
            const users = await UserModel.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new UserController();
