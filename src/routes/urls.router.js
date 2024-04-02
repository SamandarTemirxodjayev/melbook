const {Router} = require("express");
const controller = require("../controllers/urls.controller.js");
const router = Router();
const adminMiddleware = require("../middleware/admin.middleware.js");

router.get("/", controller.getUrl);
router.post("/", adminMiddleware, controller.createUrl);

module.exports = router;
