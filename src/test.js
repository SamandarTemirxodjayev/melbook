const https = require("https");
const crypto = require("crypto");

const SERVICE_ID = 56410;
const MERCHANT_ID = 24766;
const SECRET_KEY = "CI7y54vFup5I8O4XfX";
const MERCHANT_USER_ID = 39591;

// Example values
const amount = 100; // The amount for the invoice
const phoneNumber = "998339333021"; // Customer's phone number
const merchantTransId = "65f9db261dc6447ae3555cf9"; // A unique merchant transaction ID

const timestamp = Math.floor(Date.now() / 1000);
const digest = crypto
	.createHash("sha1")
	.update(`${timestamp}${SECRET_KEY}`)
	.digest("hex");
const authHeader = `${MERCHANT_USER_ID}:${digest}:${timestamp}`;

const postData = JSON.stringify({
	service_id: SERVICE_ID,
	amount: amount,
	phone_number: phoneNumber,
	merchant_trans_id: merchantTransId,
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
	console.log(`STATUS: ${res.statusCode}`);
	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding("utf8");
	res.on("data", (chunk) => {
		console.log("BODY: " + chunk);
	});
	res.on("end", () => {
		console.log("No more data in response.");
	});
});

req.on("error", (e) => {
	console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
