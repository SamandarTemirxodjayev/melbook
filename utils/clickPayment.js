const https = require("https");
const crypto = require("crypto");
require("dotenv").config();

const SERVICE_ID = process.env.CLICK_SERVICE_ID;
const MERCHANT_ID = process.env.CLICK_MERCHANT_ID;
const SECRET_KEY = process.env.CLICK_SECRET_KEY;
const MERCHANT_USER_ID = process.env.CLICK_MERCHANT_USER_ID;
const timestamp = Math.floor(Date.now() / 1000).toString();
const digest = crypto
	.createHash("sha1")
	.update(timestamp + SECRET_KEY)
	.digest("hex");
const authHeader = `${MERCHANT_USER_ID}:${digest}:${timestamp}`;

const createClickPayment = (amount, phone_number, merchant_trans_id) => {
	return new Promise((resolve, reject) => {
		const postData = JSON.stringify({
			service_id: SERVICE_ID,
			amount,
			phone_number,
			merchant_trans_id,
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

		const req = https.request(options, (res) => {
			let data = "";
			res.on("data", (chunk) => {
				data += chunk;
			});
			res.on("end", () => {
				resolve(data);
			});
		});

		req.on("error", (e) => {
			reject(e);
		});

		req.write(postData);
		req.end();
	});
};
const checkClickPayment = (invoice_id) => {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: "api.click.uz",
			port: 443,
			path: "/v2/merchant/invoice/status/" + SERVICE_ID + "/" + invoice_id,
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Auth: authHeader,
			},
		};

		const req = https.request(options, (res) => {
			let data = "";
			res.on("data", (chunk) => {
				data += chunk;
			});
			res.on("end", () => {
				resolve(data);
			});
		});

		req.on("error", (e) => {
			reject(e);
		});
		req.end();
	});
};

module.exports = {checkClickPayment, createClickPayment};
