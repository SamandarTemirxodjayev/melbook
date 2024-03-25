const {Schema, model, Types} = require("mongoose");

const audioSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	audio_url: {
		type: String,
		required: true,
	},
	book_id: {
		type: Types.ObjectId,
		ref: "books",
		required: true,
	},
});

audioSchema.set("timestamps", true);

const Audios = model("audio", audioSchema);

module.exports = Audios;
