const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const dataBase = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dataBase, user, password, {
	host: "localhost",
	dialect: "mysql"
});
const User = require("../models/User");

const Publication = sequelize.define("Publication", {
	pubId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		allowNull: false,
		type: DataTypes.STRING
	},
	text: {
		allowNull: false,
		type: DataTypes.STRING
	}
});

Publication.belongsTo(User, { foreignKey: "userId", onDelete: "cascade" });
User.hasMany(Publication, { foreignKey: "userId", onDelete: "cascade" });
Publication.belongsTo(User, { foreignKey: "firstName", onDelete: "cascade" });
User.hasMany(Publication, { foreignKey: "firstName", onDelete: "cascade" });
Publication.belongsTo(User, { foreignKey: "lastName", onDelete: "cascade" });
User.hasMany(Publication, { foreignKey: "lastName", onDelete: "cascade" });

Publication.sync()
	.then(() => console.log("La table Publication a été crée "))
	.catch(error => console.error("erreur", error));

module.exports = Publication;
