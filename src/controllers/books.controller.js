const Books = require("../models/Books");
const {Types} = require("mongoose");

exports.getAllBooks = async (req, res) => {
	try {
		const books = await Books.find().populate("category");
		const userBoughtBookIds = req.user.boughtBooks.map((book) =>
			book.toString(),
		);

		const booksWithBoughtFlag = await Promise.all(
			books.map(async (book) => {
				const bookJson = book.toJSON();
				bookJson.bought = userBoughtBookIds.includes(book._id.toString());

				if (bookJson.bought) {
					const populatedBook = await Books.findById(book._id).populate(
						"audios",
					);
					bookJson.audios = populatedBook.audios;
				} else {
					delete bookJson.audios;
					delete bookJson.book_url;
				}

				return bookJson;
			}),
		);

		return res.status(200).json({
			message: "Kitoblar Muvaffaqiyatli Yuklandi",
			status: 200,
			data: booksWithBoughtFlag,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};

exports.getBookById = async (req, res) => {
	try {
		const bookId = req.params.id;
		const book = await Books.findById(bookId).populate("category");

		if (!book) {
			return res.status(404).json({message: "Book not found"});
		}

		let bookJson = book.toJSON();

		bookJson.bought = req.user.boughtBooks.some((boughtBookId) =>
			boughtBookId.equals(book._id),
		);

		if (bookJson.bought) {
			const populatedBook = await Books.findById(book._id).populate("audios");
			bookJson.audios = populatedBook.audios;
		} else {
			delete bookJson.audios;
			delete bookJson.book_url;
		}

		return res.status(200).json({
			message: "Kitob Muvaffaqiyatli Yuklandi",
			status: 200,
			data: bookJson,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};

exports.createBook = async (req, res) => {
	const {name, photo_url, description, author, price, category, book_url} =
		req.body;
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
exports.deleteBook = async (req, res) => {
	try {
		const book = await Books.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			message: "Kitob Muvaffaqiyatli O'chirildi",
			status: 200,
			data: book,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
exports.updateBook = async (req, res) => {
	const {name, description, author, category, price} = req.body;
	if (!name) return res.status(400).json({message: "Name is required"});
	if (!description)
		return res.status(400).json({message: "Description is required"});
	if (!author) return res.status(400).json({message: "Author is required"});
	if (!category) return res.status(400).json({message: "Category is required"});
	if (!price) return res.status(400).json({message: "Price is required"});
	try {
		const book = await Books.findById(req.params.id);
		if (!book)
			return res.status(404).json({
				message: "Book not found",
			});
		book.name = name;
		book.description = description;
		book.author = author;
		book.category = new Types.ObjectId(category);
		book.price = price;
		await book.save();
		return res.status(200).json({
			message: "Kitob Muvaffaqiyatli Yangilandi",
			status: 200,
			data: book,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
