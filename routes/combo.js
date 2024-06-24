const express = require("express");
const protect = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware");
const { createComboFood, getComboFoodById ,getComboAllFoods} = require("../controllers/combo");
router = express.Router();

router.post("/addCombofood", createComboFood)
router.get("/getComboFood/:id", getComboFoodById)
router.get("/allComboFood/:catagory", getComboAllFoods)

module.exports = router;