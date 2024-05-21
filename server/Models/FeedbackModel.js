const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  electiveSubject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ElectiveSubject",
  },
  reviews: {
    type: String,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
