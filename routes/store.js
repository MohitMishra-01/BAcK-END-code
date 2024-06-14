const express = require("express");
const protect = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware");
const {storeDetails, getStatus } = require("../controllers/storeDetails");

router = express.Router();

router.put(
    "/storeUpdate",
    // requireSignIn,
    // isAdmin,
    storeDetails
  );
router.get(
    "/storeStatus",
    // requireSignIn,
    // isAdmin,
    getStatus
  );

module.exports = router;