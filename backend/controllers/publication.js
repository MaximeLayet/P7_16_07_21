const { sequelize } = require("../models/Publication");
const Publication = require("../models/Publication");
const User = require("../models/User");

exports.getAllPublication = (req, res, next) => {
	sequelize;
	Publication.findAll()
		.then(publications => res.status(200).json(publications))
		.catch(error => res.status(400).json({ error }));
};

exports.createPublication = (req, res, next) => {
	const publication = new Publication({
		title: req.body.title,
		text: req.body.text
	});
	publication
		.save()
		.then(() => res.status(200).json({ message: "Publication créé" }))
		.catch(error => res.status(400).json({ error }));
};

exports.deleteOnePublication = (req, res, next) => {
	Publication.destroy({ where: { pubId: req.params.pubId } })
		.then(() => {
			res.status(200).send("Publaction supprimé");
		})
		.catch(error => res.status(500));
};

exports.getOnePublication = (req, res, next) => {
	Publication.findOne({ where: { pubId: req.params.pubId } })
		.then(publication => res.status(200).json(publication))
		.catch(error => res.status(400).json({ error }));
};

exports.modifyOnePublication = (req, res, next) => {
	Publication.findOne({ where: { pubId: req.params.pubId } }).then(publication => {
		if (publication) {
			publication
				.update({
					title: req.body.title,
					text: req.body.text
				})
				.then(function (publication) {
					res.send(publication);
				});
		} else res.status(403).json({ message: "erreur" });
	});
};
