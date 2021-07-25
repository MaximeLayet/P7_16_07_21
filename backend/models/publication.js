const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("groupomania", "root", "Aeleonieve201195", {
	host: "localhost",
	dialect: "mysql"
});

const User = require("../models/User");

const Publication = sequelize.define("Publication", {
	id: {
		allowNull: false,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	userId: {
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
User.hasMany(Publication, { foreignKey: "users_id", onDelete: "cascade" });

Publication.sync()
	.then(() => console.log("La table Publication a été crée "))
	.catch(error => console.error("erreur", error));

module.exports = Publication;
