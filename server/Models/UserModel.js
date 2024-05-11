const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  role: {
    type: String,
    enum: ["admin", "user","student"], // Example roles
    default: "user",
  },
  //save otp token and its expiry time to database
  otpToken :{
    type: String
  },
  optExpiry :{
    type: Date
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Its change password every time 

// userSchema.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, 12);
//   next()
// });



module.exports = mongoose.model("User", userSchema);