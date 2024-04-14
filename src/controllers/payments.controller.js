const {getToken} = require("../../utils/authTokenPayment");
const {
	createClickPayment,
	checkClickPayment,
} = require("../../utils/clickPayment");
const Books = require("../models/Books");
const Payments = require("../models/Payments");
const axios = require("axios");
const https = require("https");
require("dotenv").config();

exports.createPaymentByCardNumber = async (req, res) => {
	const {card_number, card_expirence, book_id} = req.body;
	if (!card_number)
		return res.status(400).json({error: "Card number is required."});
	if (!card_expirence)
		return res.status(400).json({error: "Card expirence is required."});
	if (!book_id) return res.status(400).json({error: "Book id is required."});
	try {
		const book = await Books.findById(book_id);
		if (!book)
			return res.status(404).json({
				message: "Book not found",
			});
		const payment = await Payments.create({
			user_id: req.user._id,
			book_id,
			type: "by_card_number",
		});
		const {token} = await getToken();
		const agent = new https.Agent({
			rejectUnauthorized: false,
		});

		// Fetch a new token if none is stored or if it's expired
		const response = await axios.post(
			process.env.MULTICARD_CONNECTION_API + "/payment",
			{
				card: {
					pan: card_number,
					expiry: card_expirence,
				},
				amount: book.price * 100,
				store_id: process.env.MULTICARD_STORE_ID,
				invoice_id: payment._id,
				details: "",
			},
			{
				httpsAgent: agent,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		payment.payment_uuid = response.data.data.uuid;
		await payment.save();
		return res.status(200).json({
			message: "Payment created",
			status: 200,
			data: {
				payment,
				info: response.data,
			},
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.confirmPaymentByCardNumber = async (req, res) => {
	const {uuid} = req.params;
	if (!uuid) return res.status(400).json({error: "Payment uuid is required."});
	const {code} = req.body;
	if (!code) return res.status(400).json({error: "Payment code is required."});
	try {
		const payment = await Payments.findOne({
			payment_uuid: uuid,
			status: 0,
		});
		if (!payment)
			return res.status(404).json({
				message: "Payment not found",
			});
		const {token} = await getToken();
		const agent = new https.Agent({
			rejectUnauthorized: false,
		});

		const response = await axios.put(
			process.env.MULTICARD_CONNECTION_API + "/payment/" + uuid,
			{
				otp: code,
			},
			{
				httpsAgent: agent,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		if (response.data.success) {
			req.user.boughtBooks.push(payment.book_id);
			await req.user.save();
			payment.status = 1;
			await payment.save();
			return res.status(200).json({
				message: "Payment confirmed",
				status: 200,
				data: {
					payment,
					info: response.data,
				},
			});
		} else {
			return res.status(400).json({
				message: "Payment failed",
				status: 400,
				data: {
					payment,
					info: response.data,
				},
			});
		}
	} catch (error) {
		console.log(error.request);
		return res.status(500).json({message: error.message, status: 500});
	}
};
exports.createPaymentByClick = async (req, res) => {
	const {book_id, phone_number} = req.body;
	if (!book_id) return res.status(400).json({error: "Book id is required."});
	if (!phone_number)
		return res.status(400).json({error: "Phone number is required."});
	try {
		const payment = await Payments.create({
			user_id: req.user._id,
			book_id: book_id,
			type: "by_click",
		});
		const book = await Books.findById(req.body.book_id);
		const clickRes = await createClickPayment(
			book.price,
			phone_number,
			payment._id,
		);
		payment.payment_uuid = JSON.parse(clickRes).invoice_id;
		await payment.save();
		return res.status(200).json({
			message: "Payment created",
			status: 200,
			data: {
				payment,
				info: JSON.parse(clickRes),
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({message: error.message, status: 500});
	}
};
exports.checkPaymentByClick = async (req, res) => {
	const {uuid} = req.params;
	if (!uuid) return res.status(400).json({error: "Payment uuid is required."});
	try {
		const payment = await Payments.findOne({
			payment_uuid: uuid,
			status: 0,
		});
		if (!payment)
			return res.status(404).json({
				message: "Payment not found",
			});
		const clickRes = await checkClickPayment(uuid);
		const click = JSON.parse(clickRes);
		if (click.status == 0) {
			return res.json({
				message: "To'lov yaratilgan",
				status: 200,
				data: {
					payment,
					info: JSON.parse(clickRes),
				},
			});
		} else if (click.status == -99) {
			payment.deleteOne();
			return res.json({
				message: "To'lov Bekor Qilingan",
				status: 200,
				data: {
					payment,
					info: JSON.parse(clickRes),
				},
			});
		} else if (click.status == 2) {
			payment.status = 1;
			await payment.save();
			req.user.boughtBooks.push(payment.book_id);
			await req.user.save();
			return res.json({
				message: "Payment confirmed",
				status: 200,
				data: {
					payment,
					info: JSON.parse(clickRes),
				},
			});
		}
		return res.status(400).json({
			message: "Error",
			status: 200,
			data: {
				payment,
				info: JSON.parse(clickRes),
			},
		});
	} catch (error) {
		return res.status(500).json({message: error.message, status: 500});
	}
};
exports.getPaymentHistory = async (req, res) => {
	try {
		const payments = await Payments.find({
			user_id: req.user._id,
			status: 1,
		});
		return res.status(200).json({
			message: "Payment history",
			status: 200,
			data: {
				payments,
			},
		});
	} catch (error) {
		return res.status(500).json({message: error.message, status: 500});
	}
};
