const { sequelize } = require("../models/Comment");
const Comment = require("../models/Comment");
const User = require("../models/User");
const Publication = require("../models/Publication");

exports.getAllComment = (req, res, next) => {
	sequelize;
	Comment.findAll({ order: [["createdAt", "DESC"]] })
		.then(comments => res.status(200).json(comments))
		.catch(error => res.status(400).json({ error }));
};

exports.createComment = (req, res, next) => {
	const comment = new Comment({
		content: req.body.content,
		userId: req.body.userId,
		pubId: req.body.pubId
	});
	comment
		.save()
		.then(() => res.status(200).json({ message: "Commentaire posté!" }))
		.catch(error => res.status(400).json({ error }));
};

exports.deleteOneComment = (req, res, next) => {
	Comment.destroy({ where: { commentId: req.params.commentId } })
		.then(() => {
			res.status(200).send("Commentaire supprimé");
		})
		.catch(error => res.status(500));
};

exports.getOneComment = (req, res, next) => {
	Comment.findOne({ where: { commentId: req.params.commentId } })
		.then(comment => res.status(200).json(comment))
		.catch(error => res.status(400).json({ error }));
};

exports.modifyOneComment = (req, res, next) => {
	Comment.findOne({ where: { commentId: req.params.commentId } }).then(comment => {
		if (comment) {
			comment
				.update({
					content: req.body.content
				})
				.then(function (comment) {
					res.send(comment);
				});
		} else res.status(403).json({ message: "erreur" });
	});
};
