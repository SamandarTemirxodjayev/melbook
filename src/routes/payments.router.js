const {Router} = require("express");
const controller = require("../controllers/payments.controller.js");
const userMiddleware = require("../middleware/user.middleware.js");

const router = Router();

router.post(
	"/card/create",
	userMiddleware,
	controller.createPaymentByCardNumber,
);
router.put(
	"/card/:uuid",
	userMiddleware,
	controller.confirmPaymentByCardNumber,
);
router.post("/click/create", userMiddleware, controller.createPaymentByClick);
router.put("/click/:uuid", userMiddleware, controller.checkPaymentByClick);

module.exports = router;
