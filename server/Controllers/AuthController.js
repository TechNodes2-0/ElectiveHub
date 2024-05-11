const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const { authenticator } = require("otplib");
const { sendEmail } = require("../util/sendEmail");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, role }  = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username,role});
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true  });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password' }) 
    }
    
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}

module.exports.sendOTP = async(req, res)=>{
  try{
    const {userId} = req.body;
    const user = await User.findById(userId);
    
    const  otp = authenticator.generate(process.env.OTP_SECRET);

    user.otpToken = otp;
    user.optExpiry = Date.now() + 10 * 60 * 1000;//10min

    await user.save();

    await sendEmail({
      email: user.email, 
      subject: "OTP Verification", 
      message: `Your One-Time Password(OTP) is: ${otp}`
    });

    return res.status(200).json({message: "OTP sent on your email", success: true});
  }
  catch(err){
    console.error(err);
    return res.status(500).json({error: "Something is wrong. Please try after some time."});
  }
}

module.exports.verifyOTP = async(req, res)=>{
  try{
    const {userId, otp} = req.body;
    const user = await User.findById(userId);

    const currentTime = Date.now();
    //check otp is valid or not 
    if(otp !== user.otpToken || currentTime > user.optExpiry){
      return res.status(400).json({error: "Invalid OTP"});
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(200)
      .json({ message: "OTP verified", success: true, token  });
  }
  catch(err){
    console.error(err);
    return res.status(500).json({error: "Something is wrong. Please try after some time."})
  }
}