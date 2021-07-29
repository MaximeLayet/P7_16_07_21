const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];

		const decodedToken = jwt.verify(token, "bvbdjvdLKlknlknnhjvv");
		console.log(token);
		console.log(decodedToken);
		const userId = decodedToken.userId;
		console.log(userId);
		if (req.body.userId && req.body.userId !== userId) {
			throw "User ID non valable";
		} else {
			req.body.userFromToken = userId;
			next();
		}
	} catch {
		res.status(401).json({
			error: new Error("Requête non validé")
		});
	}
};
