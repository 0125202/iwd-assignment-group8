const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	password2: {
		type: String,
		required: true,
	},
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
