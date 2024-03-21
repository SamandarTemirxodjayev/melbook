const {Schema, model, Types} = require("mongoose");

const paymentSchema = new Schema({
	user_id: {
		type: Types.ObjectId,
		ref: "users",
		required: true,
	},
	status: {
		type: Number,
		default: 0,
	},
	book_id: {
		type: Types.ObjectId,
		ref: "books",
		required: true,
	},
	phone_number: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

paymentSchema.set("timestamps", true);

const Payments = model("payments", paymentSchema);

module.exports = Payments;
