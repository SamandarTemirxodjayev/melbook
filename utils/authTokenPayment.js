require("dotenv").config();
const axios = require("axios");
const Redis = require("ioredis");
const https = require("https"); // Required for the https agent

const redis = new Redis();

exports.getToken = async () => {
	try {
		let tokenString = await redis.get("authToken");
		let token = tokenString ? JSON.parse(tokenString) : null;

		if (token && new Date(token.expiry) > new Date()) {
			return token;
		}

		const agent = new https.Agent({
			rejectUnauthorized: false,
		});

		const response = await axios.post(
			process.env.MULTICARD_CONNECTION_API + "/auth",
			{
				application_id: process.env.MULTICARD_APPLICATION_ID,
				secret: process.env.MULTICARD_SECRET,
			},
			{httpsAgent: agent},
		);

		const newToken = {
			token: response.data.token,
			role: response.data.role,
			expiry: response.data.expiry,
		};

		const ttl =
			(new Date(response.data.expiry).getTime() - new Date().getTime()) / 1000 -
			120;
		await redis.set(
			"authToken",
			JSON.stringify(newToken),
			"EX",
			Math.floor(ttl),
		);

		return newToken;
	} catch (error) {
		console.error("Error fetching or storing token:", error.message);
		throw new Error("Failed to fetch or store authentication token.");
	}
};
