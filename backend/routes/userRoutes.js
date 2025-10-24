const express = require("express");
const admin = require("../controllers/adminController");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

// Only for admin
router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=> {
  return res.json({message:"this is a admin"});
});

// Only for teacher
router.get("/teacher",verifyToken,authorizeRoles("admin","teacher"),(req,res)=>{
  return res.json({message:"this is a Teacher"});
});

// Only for parent
router.get("/parent",verifyToken,authorizeRoles("admin","teacher","parent"),(req,res)=>{
  return res.json({message:"this is a Parent"})
  
});

// Only for student
router.get("/student",verifyToken,authorizeRoles("admin","teacher","parent","student"),(req,res)=>{
  return res.json({message:"this is a Student"})

});


module.exports = router;