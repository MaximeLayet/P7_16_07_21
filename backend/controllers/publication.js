const { sequelize } = require("../models/Publication");
const Publication = require("../models/Publication");
const User = require("../models/User");

exports.getAllPosts = (req, res, next) => {
	sequelize
		.query("SELECT * FROM publications")
		.then(posts => res.status(200).json(posts))
		.catch(error => res.status(400).json({ error }));
};

exports.createPublication = (req, res, next) => {
	console.log(req.body);
	const publication = new Publication({
		users_id: req.body.userId,
		content: req.body.content
	});
	post.save()
		.then(() => res.status(200).json({ message: "Post créé" }))
		.catch(error => res.status(400).json({ error }));
};

exports.deleteOnePublication = (req, res, next) => {
	Post.findAll({ where: { users_id: req.body.users_id } })
		.then(publication => {
			Publication.destroy({ where: { users_Id: req.body.users_id } })
				.then(() => res.status(200).json({ message: "Post supprimé ! " }))
				.catch(error => res.status(400).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};

exports.getOnePublication = (req, res, next) => {
	Publication.findAll({ where: { users_id: req.body.id }, include: [{ model: User }] })
		.then(post => res.status(200).json(post))
		.catch(error => res.status(400).json({ error }));
};

exports.modifyOnePublication = (req, res, next) => {
	Publication.update(
		{
			content: req.body.content
		},
		{
			where: {
				users_id: req.body.id
			}
		}
	)
		.then(() => res.status(200).json({ message: "Votre post a été modifié !" }))
		.catch(error =>
			res.status(400).json({ message: "Votre post n'a pas pu être modifié" + error })
		);
};
