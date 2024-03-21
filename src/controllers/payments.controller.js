const https = require("https");
const crypto = require("crypto");
const Payments = require("../models/Payments");
require("dotenv").config();

const SERVICE_ID = process.env.CLICK_SERVICE_ID;
const MERCHANT_ID = process.env.CLICK_MERCHANT_ID;
const SECRET_KEY = process.env.CLICK_SECRET_KEY;
const MERCHANT_USER_ID = process.env.CLICK_MERCHANT_USER_ID;

const timestamp = Math.floor(Date.now() / 1000);
const digest = crypto
	.createHash("sha1")
	.update(`${timestamp}${SECRET_KEY}`)
	.digest("hex");
const authHeader = `${MERCHANT_USER_ID}:${digest}:${timestamp}`;

exports.createClickPayment = async (req, res) => {
	try {
		const {amount, phone_number} = req.body;
		if (!amount) return res.status(400).json({error: "amount is required"});
		if (!phone_number)
			return res.status(400).json({error: "phone_number is required"});

		const newPayment = await Payments.create({
			user_id: req.user._id,
			book_id: req.body.book_id,
			phone_number: req.body.phone_number,
			date: req.body.date,
			type: "click",
		});
		await newPayment.save();

		const postData = JSON.stringify({
			service_id: SERVICE_ID,
			amount,
			phone_number,
			merchant_trans_id: newPayment._id,
		});

		const options = {
			hostname: "api.click.uz",
			port: 443,
			path: "/v2/merchant/invoice/create",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Auth: authHeader,
			},
		};

		const request = https.request(options, (response) => {
			let data = ""; // Initialize a variable to hold the chunks of data
			response.setEncoding("utf8");
			response.on("data", (chunk) => {
				data += chunk; // Accumulate the chunks of data
			});
			response.on("end", () => {
				console.log("BODY: " + data);
				// Now that all data has been received, send the response here
				try {
					const parsedData = JSON.parse(data);
					res.status(200).json({
						message: "To'lov yaratildi",
						status: 200,
						data: {
							chunk: parsedData,
							payment: newPayment,
						},
					});
				} catch (error) {
					console.error(`Error parsing JSON response: ${error}`);
					return res.status(500).json({message: "Something went wrong"});
				}
			});
		});
		request.on("error", (e) => {
			console.error(`problem with request: ${e.message}`);
			return res.status(500).json({message: "Something went wrong"});
		});
		request.write(postData);
		request.end();
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

exports.checkClickPayments = async (req, res) => {
	try {
		console.log(req.body);
		console.log(req.params);
		console.log(req.query);
		console.log(req.cookies);
		return res.status(200).json({status: 200});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};
