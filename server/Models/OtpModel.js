const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    signature: {
        type: String,
        required: true,
    },
    publicKey: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
    },
  });


module.exports = mongoose.model("OTP", otpSchema);

