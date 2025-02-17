const { Model ,DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Comments = require("./commentsModel"); // Import Comments model

class Clothes extends Model {}

Clothes.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    specifications: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fabricMaterial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    embroideryTextureDesign: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clothesDesign: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize ,
    tableName: "clothes",
    timestamps: true
  }
);

// Association
Clothes.hasMany(Comments, {
  foreignKey: "clothesId",
  as: "comments"
});
Comments.belongsTo(Clothes, {
  foreignKey: "clothesId",
  as: "clothes"
});

module.exports = Clothes;
