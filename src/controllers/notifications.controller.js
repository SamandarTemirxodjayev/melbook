const Notifications = require("../models/Notifications");

exports.createNotification = async (req, res) => {
	try {
		const notifications = new Notifications({
			photo_url: req.body.photo_url,
			title: req.body.title,
			content: req.body.content,
		});
		await notifications.save();
		return res.json({
			status: 200,
			message: "Notification created",
			data: notifications,
		});
	} catch (error) {
		return res.status(500).json(error);
	}
};
exports.getNotifications = async (req, res) => {
	try {
		const userId = req.user._id;

		const notifications = await Notifications.find();

		const customizedNotifications = notifications.map((notification) => ({
			...notification.toObject(),
			isRead: notification.readBy.includes(userId),
		}));

		res.status(200).send({
			status: 200,
			message: "Notifications",
			data: customizedNotifications,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};
exports.markNotificationAsRead = async (req, res) => {
	try {
		const userId = req.user._id;
		const notificationId = req.params.id;

		const notification = await Notifications.findById(notificationId);

		if (!notification.readBy.includes(userId)) {
			notification.readBy.push(userId);
			await notification.save();
		}

		res.status(200).send({
			status: 200,
			message: "Notification marked as read",
			data: notification,
		});
	} catch (error) {
		res.status(400).send(error);
	}
};
exports.markAsReadAllNotifications = async (req, res) => {
	try {
		const userId = req.user._id;
		const notifications = await Notifications.find();

		const updates = notifications.map(async (notification) => {
			if (!notification.readBy.includes(userId)) {
				notification.readBy.push(userId);
				await notification.save();
			}
		});

		await Promise.all(updates);

		const customizedNotifications = notifications.map((notification) => ({
			...notification.toObject(),
			isRead: notification.readBy.includes(userId),
		}));

		res.status(200).send({
			status: 200,
			message: "Notifications marked as read",
			data: customizedNotifications,
		});
	} catch (error) {
		res.status(400).send(error);
	}
};
exports.deleteNotification = async (req, res) => {
	try {
		await Notifications.findByIdAndDelete(req.params.id);
		return res.status(200).send({
			status: 200,
			message: "Eslatma O'chirildi",
		});
	} catch (error) {
		return res.status(400).send(error);
	}
};
exports.upadateNotification = async (req, res) => {
	try {
		await Notifications.findByIdAndUpdate(req.params.id, {
			title: req.body.title,
			content: req.body.content,
		});
		return res.status(200).send({
			status: 200,
			message: "Eslatma Yangilandi",
		});
	} catch (error) {
		return res.status(400).send(error);
	}
};
