const Redis = require("ioredis");

const redis = new Redis();

exports.getUrl = async (req, res) => {
	try {
		let youtubeUrl = await redis.get("youtubeUrl");
		if (youtubeUrl) {
			return res.status(200).json({
				data: {
					youtubeUrl,
				},
				status: 200,
			});
		}
		return res.json({
			message: "urls not found",
			status: 200,
			data: [],
		});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};
exports.createUrl = async (req, res) => {
	if (!req.body.youtubeUrl) {
		return res.status(400).json({
			message: "youtubeUrl is required",
			status: 400,
		});``
	}
	try {
		await redis.set("youtubeUrl", req.body.youtubeUrl);
		let youtubeUrl = await redis.get("youtubeUrl");
		return res.status(200).json({
			message: "urls created",
			status: 200,
			data: {
				youtubeUrl,
			},
		});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};
