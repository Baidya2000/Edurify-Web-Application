const database = require("../utils/database.js");
const User = require("../models/user");

const signup = async (req, res) => {
	try {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
		user.save();
		res.send("Sign up Successfull.");
	} catch (error) {
		console.log(error);
		res.send("unknown error!");
	}
};

const login = async (req, res) => {
	try {
		// Find user by email
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(400).send("Email does not exist");
		}

		// Check password
		if (user.password !== req.body.password) {
			return res.status(400).send("Invalid password");
		}

		// Create and assign a token
		// const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
		// res.header('auth-token', token).send(token);

		res.send("Logged in!");
	} catch (error) {
		console.log(error);
		res.status(500).send("An error occurred");
	}
};

module.exports = { signup, login };
