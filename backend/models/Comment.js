const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("groupomania", "root", "Aeleonieve201195", {
	host: "localhost",
	dialect: "mysql"
});

const User = require("../models/User");
const Publication = require("../models/Publication");

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

User.hasMany(Comment, { foreignKey: "userId", onDelete: "cascade" });
Comment.belongsTo(User, { foreignKey: "userId", onDelete: "cascade" });
Publication.hasMany(Comment, { foreignKey: "pubId", onDelete: "cascade" });
Comment.belongsTo(Publication, { foreignKey: "pubId", onDelete: "cascade" });

Comment.sync()
	.then(() => console.log("La table commentaire a bien été crée"))
	.catch(error => console.error("erreur", error));

module.exports = Comment;
