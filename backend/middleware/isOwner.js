const User = require("../models/User");

module.export = (req, res, next) => {
	User.findbyPK(id, { where: { userId: req.params.userId } })
		.then(user => {
			if (user.userId !== req.body.userFromToken) {
				throw "Requête non autorisée";
			} else {
				next();
			}
		})
		.catch(error => res.status(401).json({ error }));
};
