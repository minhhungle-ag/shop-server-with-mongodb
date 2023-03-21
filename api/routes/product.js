const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.getAll);
router.get("/:productId", productController.get);
router.post("/", productController.add);
router.put("/:productId", productController.edit);
router.delete("/:productId", productController.remove);

module.exports = router;
