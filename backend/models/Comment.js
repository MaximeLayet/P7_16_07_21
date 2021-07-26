const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("groupomania", "root", "Aeleonieve201195", {
	host: "localhost",
	dialect: "mysql"
});

const Comment = sequelize.define("Comment", {
	commentId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	content: {
		allowNull: false,
		type: DataTypes.STRING
	}
});

Comment.sync()
	.then(() => console.log("La table commentaire a bien été crée"))
	.catch(error => console.error("erreur", error));

module.exports = Comment;
