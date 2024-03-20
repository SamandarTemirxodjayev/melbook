const Books = require("../models/Books");

exports.getAllBooks = async (req, res) => {
	try {
		const books = await Books.find();
		return res.status(200).json({
			message: "Kitoblar Muvaffaqiyatli Yuklandi",
			status: 200,
			data: books,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
exports.getBookById = async (req, res) => {
	try {
		const book = await Books.findById(req.params.id);
		return res.status(200).json({
			message: "Kitob Muvaffaqiyatli Yuklandi",
			status: 200,
			data: book,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
exports.createBook = async (req, res) => {
	const {
		name,
		photo_url,
		description,
		author,
		price,
		category,
		book_url,
		book_audio_url,
	} = req.body;
	if (!name) return res.status(400).json({message: "Name is required"});
	if (!photo_url) return res.status(400).json({message: "Photo is required"});
	if (!description)
		return res.status(400).json({message: "Description is required"});
	if (!price) return res.status(400).json({message: "Price is required"});
	if (!category) return res.status(400).json({message: "Category is required"});
	if (!book_url) return res.status(400).json({message: "Book url is required"});
	try {
		const book = await Books.create({
			name,
			photo_url,
			description,
			author,
			price,
			category,
			book_url,
			book_audio_url,
		});
		return res.status(201).json({
			message: "Kitob Muvaffaqiyatli Yaratildi",
			status: 201,
			data: book,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
