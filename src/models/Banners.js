const {Schema, model} = require("mongoose");

const bannerSchema = new Schema({
	photo_url: {
		type: String,
		required: true,
	},
});

bannerSchema.set("timestamps", true);

module.exports = model("banners", bannerSchema);
