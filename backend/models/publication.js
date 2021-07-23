const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("groupomania", "root", "Aeleonieve201195", {
	host: "localhost",
	dialect: "mysql"
});

const User = require("../models/User");

const publication = sequelize.define("Publication", {
	id: {
		allowNull: false,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	users_id: {
		allowNull: false,
		type: DataTypes.INTEGER
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

Publication.belongsTo(User, { foreignKey: "users_id", onDelete: "cascade" });
User.hasMany(publication, { foreignKey: "users_id", onDelete: "cascade" });

Publication.sync()
	.then(() => console.log("La table Post est crée "))
	.catch(error => console.error("erreur", error));

module.exports = publication;
