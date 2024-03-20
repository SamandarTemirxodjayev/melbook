const {Router} = require("express");
const userMiddleware = require("../middleware/user.middleware.js");
const adminMiddleware = require("../middleware/admin.middleware.js");
const controller = require("../controllers/notifications.controller.js");
const router = Router();

router.post("/", adminMiddleware, controller.createNotification);
router.get("/", userMiddleware, controller.getNotifications);
router.post("/:id/read", userMiddleware, controller.markNotificationAsRead);
router.post("/readall", userMiddleware, controller.markAsReadAllNotifications);
router.delete("/:id", adminMiddleware, controller.deleteNotification);
router.put("/:id", adminMiddleware, controller.upadateNotification);

module.exports = router;
