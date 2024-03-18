const {Schema, model, Types} = require("mongoose");

const bookSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	photo_url: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: Types.ObjectId,
		ref: "category",
		required: true,
	},
	book_url: {
		type: String,
	},
	book_audio_url: {
		type: String,
	},
});

bookSchema.set("timestamps", true);

const Books = model("books", bookSchema);

module.exports = Books;
