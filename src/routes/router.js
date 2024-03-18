const {Router} = require("express");
const user_router = require("./user.router.js");
const banner_router = require("./banner.router.js");
const categories_router = require("./categories.router.js");

const router = Router();

router.use("/user", user_router);
router.use("/banners", banner_router);
router.use("/categories", categories_router);

module.exports = router;
