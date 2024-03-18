const {Schema, model} = require("mongoose");

const filesSchema = new Schema({
	user: {
		type: String,
	},
	fileName: {
		type: String,
	},
	fileId: {
		type: String,
	},
	fileUrl: {
		type: String,
	},
});
filesSchema.set("timestamps", true);

const Files = model("files", filesSchema);

module.exports = Files;
