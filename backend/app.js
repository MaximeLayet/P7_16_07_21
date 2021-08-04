const express = require("express");

const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");
const publicationRoutes = require("./routes/publication");
const cors = require("cors");

const app = express();
const expressRateLimit = require("express-rate-limit");

const limiter = expressRateLimit({
	max: 100,
	windowsMs: 15 * 60 * 1000,
	messsage: "Trop de requêtes depuis votre adresse IP, merci de réessayer un peu plus tard"
});
app.use("/api", limiter);

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const dataBase = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;

// Connection database

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(dataBase, user, password, {
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
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/publication", publicationRoutes);
app.use("/api/comment", commentRoutes);

app.use("/api/auth", userRoutes);

module.exports = app;
