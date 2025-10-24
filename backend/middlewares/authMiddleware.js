const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
  
  // finds token from header
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1];

    // if token is not available 
    if(!token){
      return res.status(401).json({message: "No token, Authorization Denied"});
    }
    
    // after token extracted do this to verify user
    try {
      const decode = jwt.verify(token,process.env.JWT_SECRET);
      req.user = decode;
      console.log("The decoded user is: ", req.user);
      next();
      
    } catch (error) {
      return res.status(400).json({message:"Token is not valid"});
    }
    
  }else{
    return res.status(401).json({message: "No token, Authorization Denied"});
  };


};

module.exports = verifyToken;