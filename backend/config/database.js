const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("maxime", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

async function test() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		await sequelize.sync({ force: true });
		console.log("The table for the User model was just (re)created!");
		// await User.create({ firstName: "Jane", lastName: "Doe" });
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}
test();
