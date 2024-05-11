const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt, role } = req.body;
    
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.json({ message: "Email already exists" });
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.json({ message: "Username already exists" });
    }

    const user = await User.create({ email, password, username, createdAt, role });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User signed up successfully", success: true, token });
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
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
    
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
    
    
     res.status(201).json({ message: "User logged in successfully", success: true ,token });
     next()
  } catch (error) {
    console.error(error);
  }
}