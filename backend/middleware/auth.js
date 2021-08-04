const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.TOKEN;

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];

		const decodedToken = jwt.verify(token, token);

		const userId = decodedToken.userId;

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
