const {Router} = require("express");
const controller = require("../controllers/users.controller.js");
const middleware = require("../middleware/user.middleware.js");
const adminMiddleware = require("../middleware/admin.middleware.js");
const router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/get-me", middleware, controller.getMe);
router.get("/get-all", adminMiddleware, controller.getAll);
router.delete("/:id", adminMiddleware, controller.deleteOne);
router.put("/", middleware, controller.updateOne);

module.exports = router;
