// student.js

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});


const electiveSubjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true
  },
  subjectDescription: {
    type: String,
    required: true
  },
  subjectCode: {
    type: String,
    required: true,
    unique: true
  }
});


const Student = mongoose.model("Student", studentSchema);
const ElectiveSubject = mongoose.model('ElectiveSubject', electiveSubjectSchema);

module.exports = {Student,ElectiveSubject};
