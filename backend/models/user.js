//pense à ajouter la partie sql
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("maxime", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

const User = sequelize.define("User", {
	// Model attributes are defined here
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Veuillez renseigner votre prénom"
			}
		}
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Veuillez renseigner votre nom de famille"
			}
		}
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Veuillez renseigner votre mail"
			}
		},
		unique: true
	},
	password: {
		type: DataTypes.STRING(64),
		is: /^[0-9a-f]{64}$/i,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Indiquer un mot de passe valide"
			}
		}
	}
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

app.post("/users", async (req, res) => {
	const user = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	};
	await User.create(user);
	res.json(user);
});
