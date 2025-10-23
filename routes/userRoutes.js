const express = require("express");
const admin = require("../controllers/adminController");
const router = express.Router();

// Only for admin
router.get("/admin",admin);

// Only for teacher
// router.get("/teacher",teacher);

// Only for parent
// router.get("/parent",parent);

// Only for student
// router.get("/student",student);


module.exports = router;