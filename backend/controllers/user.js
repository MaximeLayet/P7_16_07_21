const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Permet l'inscription
exports.signup = (req, res, next) => {
	//bcrypt va recupérer le mot de passe, le hacher et le saler
	bcrypt
		.hash(req.body.password, 10)
		.then(hash => {
			//creation de l'utilisateur
			const user = new User({
				email: req.body.email,
				password: hash,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				isAdmin: req.body.isAdmin
			});
			user.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch(error => res.status(400).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
	//Pour trouver l'utilisateur
	User.findOne({ where: { email: req.body.email } })
		.then(user => {
			if (!user) {
				return res.status(401).json({ error: "Utilisateur non trouvé" });
			}
			//Utilisation de bcrypt pour comparer le mot de passe envoyé avec la requete avec le hash enregistré
			bcrypt
				.compare(req.body.password, user.password)
				.then(valid => {
					if (!valid) {
						return res.status(401).json({ error: "Mot de passe incorrect" });
					}
					console.log(user);
					res.status(200).json({
						userId: user.userId,
						token: jwt.sign({ userId: user.userId }, "bvbdjvdLKlknlknnhjvv", {
							expiresIn: "24h"
						})
					});
				})
				.catch(error => res.status(500).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};

exports.delete = (req, res, next) => {
	User.destroy({ where: { userId: req.params.userId } })
		.then(() => {
			res.status(200).send("Utilisateur supprimé");
		})
		.catch(error => res.status(500));
};

exports.modify = (req, res, next) => {
	User.findOne({ where: { userId: req.params.userId } }).then(user => {
		if (user) {
			bcrypt.hash(req.body.password, 10).then(hash => {
				user.update({
					email: req.body.email,
					password: hash,
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					isAdmin: req.body.isAdmin
				}).then(function (user) {
					res.send(user);
				});
			});
		} else res.status(403).json({ message: "erreur" });
	});
};

exports.getOne = (req, res, next) => {
	User.findOne({ where: { userId: req.params.userId } })
		.then(user => {
			return res.status(200).json(user);
		})
		.catch(error => res.status(404).json({ error }));
};
