const express = require("express");

const userRoutes = require("./routes/user");
// const commentRoutes = require("./routes/comment");
// const publicationRoutes = require("./routes/publication");

const app = express();

// Connection database
const { Router } = require("express");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("groupomania", "root", "Aeleonieve201195", {
	host: "localhost",
	dialect: "mysql"
});

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
	next();
});

sequelize
	.authenticate()
	.then(() => console.log("Connexion à MysQL réussie !"))
	.catch(() => console.log("Connexion à MysQL échouée !"));

app.use(express.json());

app.use("/api/user", userRoutes);
// app.use("/api/publication", publicationRoutes);
// app.use("/api/comment", commentRoutes);

module.exports = app;
