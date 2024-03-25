const {Router} = require("express");
const controller = require("../controllers/books.controller.js");
const adminMiddleware = require("../middleware/admin.middleware.js");
const userMiddleware = require("../middleware/user.middleware.js");

const router = Router();

router.get("/", userMiddleware, controller.getAllBooks);
router.get("/:id", userMiddleware, controller.getBookById);
router.post("/", adminMiddleware, controller.createBook);
router.delete("/:id", adminMiddleware, controller.deleteBook);
router.put("/:id", adminMiddleware, controller.updateBook);

module.exports = router;
