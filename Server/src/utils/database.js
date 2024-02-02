// database.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EasyForm", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const db = mongoose.connection;

module.exports = db;
