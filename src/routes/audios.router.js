const {Router} = require("express");
const adminMiddleware = require("../middleware/admin.middleware.js");
const controller = require("../controllers/audios.controller.js");

const router = Router();

router.post("/", adminMiddleware, controller.createAudio);
router.get("/", adminMiddleware, controller.getAudios);
router.delete("/:id", adminMiddleware, controller.deleteAudio);

module.exports = router;
