const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("groupomania", "root", "Aeleonieve201195", {
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

Publication.sync()
	.then(() => console.log("La table Publication a été crée "))
	.catch(error => console.error("erreur", error));

module.exports = Publication;
//, onDelete: "cascade"
