//pense à ajouter la partie sql
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("maxime", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

const User = sequelize.define("User", {
	// Model attributes are defined here
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

//comment exporter
