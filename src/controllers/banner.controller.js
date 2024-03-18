const Banners = require("../models/Banners");

exports.createBanner = async (req, res) => {
	const {photo_url} = req.body;
	if (!photo_url)
		return res.status(400).json({error: "Photo url is required."});
	try {
		const banner = await Banners.create({
			photo_url,
		});
		return res.status(201).json({
			message: "Banner Muvaffaqiyatli Yaratildi",
			status: 201,
			data: banner,
		});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};
exports.getBanners = async (req, res) => {
	try {
		const banners = await Banners.find();
		return res.status(200).json({
			message: "Bannerlar Muvaffaqiyatli Yuklandi",
			status: 200,
			data: banners,
		});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};
exports.deleteBanner = async (req, res) => {
	const {id} = req.params;
	if (!id) return res.status(400).json({error: "Banner id is required."});
	try {
		await Banners.findByIdAndDelete(id);
		return res.status(200).json({
			message: "Banner muvaffaqiyatli o'chirildi",
			status: 200,
		});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};
