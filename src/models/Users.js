const {Schema, model, Types} = require("mongoose");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	surname: {
		type: String,
		required: true,
	},
	phone_number: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	photo_url: {
		type: String,
	},
	user_level: {
		type: Number,
		default: 0,
	},
	boughtBooks: [
		{
			type: Types.ObjectId,
			ref: "books",
		},
	],
	auth_token: {
		type: String,
	},
});

userSchema.set("timestamps", true);

const Users = model("users", userSchema);

module.exports = Users;
