const {Schema, model} = require("mongoose");

const categoriesSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
});

categoriesSchema.set("timestamps", true);

const Categories = model("categories", categoriesSchema);

module.exports = Categories;
