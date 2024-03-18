const {Router} = require("express");
const middleware = require("../middleware/admin.middleware.js");
const controller = require("../controllers/banner.controller.js");
const router = Router();

router.post("/", middleware, controller.createBanner);
router.get("/", controller.getBanners);
router.delete("/:id", middleware, controller.deleteBanner);

module.exports = router;
