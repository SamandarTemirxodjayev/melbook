const Audios = require("../models/Audios");
const Books = require("../models/Books");

exports.createAudio = async (req, res) => {
	const {name, audio_url, book_id, audio_content} = req.body;
	if (!name) return res.status(400).json({message: "Name is required"});
	if (!audio_url) return res.status(400).json({message: "Audio is required"});
	if (!book_id) return res.status(400).json({message: "Book is required"});
	if (!audio_content)
		return res.status(400).json({message: "Audio content is required"});
	try {
		const audio = await Audios.create({
			name,
			audio_url,
			book_id,
			audio_content,
		});
		const book = await Books.findById(book_id);
		book.audios.push(audio._id);
		await book.save();
		return res.status(201).json(audio);
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
exports.getAudios = async (req, res) => {
	try {
		const audios = await Audios.find().populate("book_id");
		return res.status(200).json({
			message: "Audios Muvaffaqiyatli Yuklandi",
			status: 200,
			data: audios,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
exports.deleteAudio = async (req, res) => {
	try {
		const audio = await Audios.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			message: "Audio Deleted",
			status: 200,
			data: audio,
		});
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};
