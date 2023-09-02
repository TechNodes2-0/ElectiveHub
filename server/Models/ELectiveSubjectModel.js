const mongoose = require('mongoose');

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

const ElectiveSubject = mongoose.model('ElectiveSubject', electiveSubjectSchema);

module.exports = ElectiveSubject;
