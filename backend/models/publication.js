const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("maxime", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

const publication = sequilize.post("Post", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Veuillez mettre un titre à votre publication"
			}
		}
	},
	post: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: "Veuillez remplir ce champs"
			}
		}
	}
});

app.post("/publication", async (req, res) => {
	const Post = {
		title: req.body.title,
		post: req.body.post
	};
	await Post.create(publication);
	res.json(publication);
});
