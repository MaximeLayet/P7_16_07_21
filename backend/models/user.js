const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("groupomania", "root", "Aeleonieve201195", {
	host: "localhost",
	dialect: "mysql"
});

const User = sequelize.define("User", {
	userId: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	email: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING
	},
	firstName: {
		allowNull: false,
		type: DataTypes.STRING
	},
	lastName: {
		allowNull: false,
		type: DataTypes.STRING
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING
	},
	isAdmin: {
		defaultValue: false,
		allowNull: false,
		type: DataTypes.BOOLEAN
	}
});

User.sync()
	.then(() => console.log("La table User a été créée dans la base de données"))
	.catch(error => console.error("Une erreur est survenue", error));

module.exports = User;

//TODO régler le souci pour creer BD des posts(publication)
