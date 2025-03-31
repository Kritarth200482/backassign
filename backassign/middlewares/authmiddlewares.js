const jwt=require('jsonwebtoken');

const user=require('../models/userModel');

const protect=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:'Not authorized, no token'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=await user.findById(decoded.id).select('-password');
        next();
    }
    catch(error){
        res.status(401).json({message:'Not authorized, token failed'});
    }
}
module.exports={protect};

