const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const sequelize = new Sequelize("maxime", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

async function test() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		await User.sync({ force: true });
		console.log("The table for the User model was just (re)created!");
		await User.create({ firstName: "Jane", lastName: "Doe" });
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}
test();

const User = sequelize.define(
	"User",
	{
		// Model attributes are defined here
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING
			// allowNull defaults to true
		}
	},
	{
		// Other model options go here
	}
);

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
	const user = { firstName: req.body.firstName, lastName: req.body.lastName };
	await User.create(user);
	res.json(user);
});

app.listen(3000);
