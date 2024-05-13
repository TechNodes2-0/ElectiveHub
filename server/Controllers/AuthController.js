const User = require("../Models/UserModel");
const OTP = require("../Models/OtpModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const { authenticator } = require("otplib");
const { sendEmail } = require("../util/sendEmail");
const { generateKeyPair, createSignature, verifySignature } = require("../util/encrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, role, otp }  = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    // Find the most recent OTP for the email
    const otpData = await OTP.find({ email }).sort({createdAt: -1}).limit(-1);
    if(otpData.length === 0){
      return res.status(400).json({message: "OTP is not valid", success: false});
    }

    //check otp is valid or not
    const isOtpValid = verifySignature(otp, otpData[0].signature, otpData[0].publicKey);
    if(!isOtpValid){
      return res.status(400).json({message: "OTP is not valid", success: false});
    }

    //hash password only when new user created
    const hashPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password:hashPassword, username,role});

    //send token
    const token = createSecretToken(user._id);
    
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
    
     res.status(201).json({ message: "User sign in successfully", success: true ,token });
     next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(password)
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
    
    const token = createSecretToken(user._id);
    
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
    
    
     res.status(201).json({ message: "User logged in successfully", success: true ,token });
    //  res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}

module.exports.sendOTP = async(req, res)=>{
  try{
    const {email} = req.body;
    const existingUser = await User.findOne({email});
    
    if(existingUser){
      return res.json({ message: "User already exists" });
    }
    console.log(email)

    //generate otp from otplib
    const  otp = authenticator.generate(process.env.OTP_SECRET);

    const { privateKey, publicKey } = generateKeyPair();
    //create signature for otp
    const signature = createSignature(otp, privateKey);

    const otpData = await OTP.create({email, signature, publicKey});

    //send email 
    await sendEmail({
      email: email, 
      subject: "OTP Verification", 
      message: `Your One-Time Password(OTP) is: ${otp}`
    });

    return res.status(200).json({message: "OTP sent on your email", success: true});
  }
  catch(err){
    console.error(err);
    return res.status(500).json({error: "Something is wrong. Please try after some time.", success: false});
  }
}
