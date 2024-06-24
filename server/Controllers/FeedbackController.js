const Feedback = require("../Models/FeedbackModel");
const { ElectiveSubject } = require("../Models/StudentModel");
const { Student } = require("../Models/StudentModel");
exports.addFeedback = async (req, res) => {
  try {
    const { electiveSubjectId, studentId, reviews } = req.body;
    console.log(electiveSubjectId, studentId, reviews);
    if (!electiveSubjectId || !studentId || !reviews) {
      return res
        .status(400)
        .json({ error: "Please provide all the required fields" });
    }
    const student = await Student.findById(studentId);
    const electiveSubject = await ElectiveSubject.findById(electiveSubjectId);
    if (!student || !electiveSubject) {
      return res
        .status(404)
        .json({ error: "Student or Elective subject not found" });
    }
    const feedback = new Feedback({
      student: student._id,
      electiveSubject: electiveSubject._id,
      reviews,
    });
    const savedFeedback = await feedback.save();
    res.json(savedFeedback);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    let { subjectCode } = req.params;
    if (!subjectCode) {
      return res
        .status(400)
        .json({ error: "Please provide the Elective Subject Id" });
    }
    subjectCode = subjectCode.split(":")[1];
    console.log(subjectCode);
    const subject = await ElectiveSubject.findOne(
      { subjectCode: subjectCode },
      "_id"
    );

    console.log(subject);
    if (!subject) {
      return res.status(404).json({
        error:
          "Subject Not Found! Please provide a valid Elective Subject Code",
      });
    }
    // console.log(subject._id);
    const feedbacks = await Feedback.find({
      electiveSubject: subject._id,
    }).populate("student");
    res.json(feedbacks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
