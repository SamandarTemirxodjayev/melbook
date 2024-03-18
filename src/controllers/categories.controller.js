const Categories = require("../models/Categories");

exports.createCategory = async (req, res) => {
	const {name} = req.body;
	if (!name)
		return res.status(400).json({
			message: "Name is required",
			status: 400,
		});
	try {
		const category = await Categories.create({
			name,
		});
		return res.status(201).json({
			message: "Kategoriya Muvaffaqiyatli Yaratildi",
			status: 201,
			data: category,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.getCategories = async (req, res) => {
	try {
		const categories = await Categories.find();
		return res.status(200).json({
			message: "Kategoriyalar Muvaffaqiyatli Yuklandi",
			status: 200,
			data: categories,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.updateCategory = async (req, res) => {
	const {id} = req.params;
	const {name} = req.body;
	if (!id) return res.status(400).json({error: "Category id is required."});
	if (!name) return res.status(400).json({error: "Category name is required."});
	try {
		await Categories.findByIdAndUpdate(id, {name}, {new: true});
		return res.status(200).json({
			message: "Kategoriya Muvaffaqiyatli Yangilandi",
			status: 200,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.deleteCategory = async (req, res) => {
	const {id} = req.params;
	if (!id) return res.status(400).json({error: "Category id is required."});
	try {
		await Categories.findByIdAndDelete(id);
		return res.status(200).json({
			message: "Kategoriya Muvaffaqiyatli O'chirildi",
			status: 200,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
