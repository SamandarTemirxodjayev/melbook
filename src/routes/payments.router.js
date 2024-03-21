const {Router} = require("express");
const controller = require("../controllers/payments.controller.js");
const userMiddleware = require("../middleware/user.middleware.js");

const router = Router();

router.post("/click/create", userMiddleware, controller.createClickPayment);
router.get("/click", controller.checkClickPayments);
router.post("/click", controller.checkClickPayments);

module.exports = router;
