const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
require("dotenv").config();

exports.register = async (req, res) => {
	const {username, name, surname, phone_number, password} = req.body;
	if (!username) {
		return res.status(400).json({
			message: "Username is required",
			status: 400,
		});
	}
	if (!name) {
		return res.status(400).json({
			message: "Name is required",
			status: 400,
		});
	}
	if (!surname) {
		return res.status(400).json({
			message: "Surname is required",
			status: 400,
		});
	}
	if (!phone_number) {
		return res.status(400).json({
			message: "Phone number is required",
			status: 400,
		});
	}
	if (!password) {
		return res.status(400).json({
			message: "Password is required",
			status: 400,
		});
	}
	try {
		let find_user = await Users.findOne({
			username,
		});
		if (find_user) {
			return res.status(400).json({
				message: "Username already exists",
				status: 400,
			});
		}
		find_user = await Users.findOne({
			phone_number,
		});
		if (find_user) {
			return res.status(400).json({
				message: "Phone number already exists",
				status: 400,
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await Users.create({
			username,
			name,
			surname,
			phone_number,
			password: hashedPassword,
		});
		const token = jwt.sign(
			{
				userId: user._id,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: "30d",
			},
		);
		return res.status(201).json({
			message: "Foydalanuvchi Ro'yxatdan O'tkazildi",
			status: 201,
			data: {
				user,
				token,
				token_expiration: new Date(
					Date.now() + 12 * 60 * 60 * 1000 * 30,
				).toISOString(),
				token_type: "Bearer",
			},
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.login = async (req, res) => {
	const {username, password} = req.body;
	try {
		if (!username) {
			return res.status(400).json({
				message: "Login Yozilishi Shart",
				status: 400,
			});
		}
		if (!password) {
			return res.status(400).json({
				message: "Parol Yozilishi Shart",
				status: 400,
			});
		}
		const user = await Users.findOne({
			username,
		});
		if (!user) {
			return res.status(400).json({
				message: "Ushbu Login Tizimda Mavjud Emas",
				status: 400,
			});
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({
				message: "Parol Noto'g'ri ",
				status: 400,
			});
		}
		const token = jwt.sign(
			{
				userId: user._id,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: "30d",
			},
		);
		return res.status(200).json({
			status: 200,
			message: "Tizimga Muvaffaqiyatli kirildi",
			data: {
				user,
				token,
				token_expiration: new Date(
					Date.now() + 12 * 60 * 60 * 1000,
				).toISOString(),
				token_type: "Bearer",
			},
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.getMe = async (req, res) => {
	try {
		return res.status(200).json({
			message: "Foydalanuvchi Muvaffaqiyatli Yuklandi",
			status: 200,
			data: req.user,
		});
	} catch (error) {
		return res.status(500).jso({
			message: error.message,
			status: 500,
		});
	}
};
exports.getAll = async (req, res) => {
	try {
		const users = await Users.find();
		return res.status(200).json({
			message: "Foydalanuvchilar Muvaffaqiyatli Yuklandi",
			status: 200,
			data: users,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.deleteOne = async (req, res) => {
	try {
		await Users.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			message: "Foydalanuvchi O'chirildi",
			status: 200,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
exports.updateOne = async (req, res) => {
	let {username, name, surname, phone_number, password} = req.body;
	const isExistsUser = await Users.findOne({surname});
	if (isExistsUser) {
		return res.status(400).json({
			status: 400,
			message: "Username Tizimda Mavjud",
		});
	}
	if (!username)
		return res.status(400).json({message: "Username is required", status: 400});
	if (!name)
		return res.status(400).json({message: "Name is required", status: 400});
	if (!surname)
		return res.status(400).json({message: "Surname is required", status: 400});
	if (!phone_number)
		return res
			.status(400)
			.json({message: "Phone number is required", status: 400});
	if (!password)
		return res.status(400).json({message: "Password is required", status: 400});
	try {
		if (password != req.user.password) {
			password = await bcrypt.hash(password, 10);
		}
		const user = await Users.findByIdAndUpdate(
			req.user._id,
			{
				username,
				name,
				surname,
				phone_number,
				password,
			},
			{new: true},
		);
		return res.status(200).json({
			message: "Foydalanuvchi Ma'lumotlari Yangilandi",
			status: 200,
			data: user,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: 500,
		});
	}
};
