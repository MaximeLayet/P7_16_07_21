const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("maxime", "root", "", {
	host: "localhost",
	dialect: "mysql"
});
