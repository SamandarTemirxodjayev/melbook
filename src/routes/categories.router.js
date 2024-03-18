const {Router} = require("express");
const admin_middleware = require("../middleware/admin.middleware.js");
const contoller = require("../controllers/categories.controller.js");

const router = Router();

router.get("/", contoller.getCategories);
router.post("/", admin_middleware, contoller.createCategory);
router.put("/:id", admin_middleware, contoller.updateCategory);
router.delete("/:id", admin_middleware, contoller.deleteCategory);

module.exports = router;
