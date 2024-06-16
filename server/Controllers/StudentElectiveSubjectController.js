const StudentElectiveSubject = require("../Models/StudentElectiveSubjectModel");

const { Student, ElectiveSubject } = require("../Models/StudentModel");

exports.addElectiveSubjectToStudent = async (req, res) => {
  try {
    const { studentId, electiveSubjectId } = req.body;
    const student = await Student.findById(studentId);
    console.log(student);
    const electiveSubject = await ElectiveSubject.findById(electiveSubjectId);
    console.log(electiveSubject);
    if (!student || !electiveSubject) {
      return res
        .status(404)
        .json({ error: "Student or Elective subject not found" });
    }
    const studentElectiveSubject = new StudentElectiveSubject({
      student: student._id,
      electiveSubject: electiveSubject._id,
    });
    const savedStudentElectiveSubject = await studentElectiveSubject.save();
    res.json(savedStudentElectiveSubject);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Remove an elective subject from a student
exports.removeElectiveSubjectFromStudent = async (req, res) => {
  try {
    const { studentId, electiveSubjectId } = req.body;
    const student = await Student.findById(studentId);
    const electiveSubject = await ElectiveSubject.findById(electiveSubjectId);
    if (!student || !electiveSubject) {
      return res
        .status(404)
        .json({ error: "Student or Elective subject not found" });
    }
    const removedStudentElectiveSubject =
      await StudentElectiveSubject.findOneAndDelete({
        student: student._id,
        electiveSubject: electiveSubject._id,
      });
    if (!removedStudentElectiveSubject) {
      return res
        .status(404)
        .json({ error: "Student-Elective subject relationship not found" });
    }
    res.json({ message: "Elective subject removed from student successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all elective subjects for a student
exports.getElectiveSubjectsForStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findOne({ _id: id });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    const studentElectiveSubjects = await StudentElectiveSubject.find({
      student: student._id,
    }).populate("electiveSubject");
    res.json(studentElectiveSubjects);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getStudentsCountPerElectiveSubject = async (req, res) => {
  try {
    const electiveSubjects = await ElectiveSubject.find();

    const studentsCountPerSubject = [];

    for (const subject of electiveSubjects) {
      const studentElectiveSubjects = await StudentElectiveSubject.find({
        electiveSubject: subject._id,
      });

      studentsCountPerSubject.push({
        subjectName: subject.subjectName,
        studentCount: studentElectiveSubjects.length,
      });
    }

    res.json(studentsCountPerSubject);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.generateTreeData = async (req, res) => {
  try {
    const allElectiveSubjects = await ElectiveSubject.find();

    const treeData = {
      type: "node",
      name: "boss",
      value: 0,
      children: [],
    };

    for (const electiveSubject of allElectiveSubjects) {
      const studentElectiveSubjects = await StudentElectiveSubject.find({
        electiveSubject: electiveSubject._id,
      }).populate("student", ["name"]);
      console.log(studentElectiveSubjects);
      if (studentElectiveSubjects.length > 0) {
        const subjectNode = {
          type: "node",
          name: electiveSubject.subjectName,
          value: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          children: studentElectiveSubjects.map((studentElectiveSubject) => ({
            type: "leaf",
            name: studentElectiveSubject.student.name,
            value: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          })),
        };
        treeData.children.push(subjectNode);
      }
    }

    res.json(treeData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all students for an elective subject
exports.getStudentsForElectiveSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const electiveSubject = await ElectiveSubject.findById(id);
    console.log("hello");
    console.log(electiveSubject);
    if (!electiveSubject) {
      return res.status(404).json({ error: "Elective subject not found" });
    }

    const studentElectiveSubjects = await StudentElectiveSubject.find({
      electiveSubject: electiveSubject._id,
    }).populate("student", ["name", "idNumber", "email", "phoneNumber"]);
    console.log(studentElectiveSubjects);

    res.json(studentElectiveSubjects);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Edit the subject details of a student
exports.editSubjectOfStudent = async (req, res) => {
  try {
    const {
      studentId,
      electiveSubjectId,
      subjectName,
      subjectDescription,
      subjectCode,
    } = req.body;
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const studentElectiveSubject = await StudentElectiveSubject.findOne({
      student: studentId,
      electiveSubject: electiveSubjectId,
    }).populate("electiveSubject");

    if (!studentElectiveSubject) {
      return res
        .status(404)
        .json({ error: "Student-Elective subject relationship not found" });
    }

    // Update the subject details
    studentElectiveSubject.electiveSubject.subjectName = subjectName;
    studentElectiveSubject.electiveSubject.subjectDescription =
      subjectDescription;
    studentElectiveSubject.electiveSubject.subjectCode = subjectCode;

    const updatedStudentElectiveSubject = await studentElectiveSubject.save();
    res.json(updatedStudentElectiveSubject);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a student to an elective subject
exports.addStudentToElectiveSubject = async (req, res) => {
  try {
    const { studentId, electiveSubjectId } = req.body;
    const student = await Student.findById(studentId);
    const electiveSubject = await ElectiveSubject.findById(electiveSubjectId);

    if (!student || !electiveSubject) {
      return res
        .status(404)
        .json({ error: "Student or Elective subject not found" });
    }

    const studentElectiveSubject = new StudentElectiveSubject({
      student: student._id,
      electiveSubject: electiveSubject._id,
    });

    const savedStudentElectiveSubject = await studentElectiveSubject.save();
    res.json(savedStudentElectiveSubject);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.removeStudentFromElectiveSubject = async (req, res) => {
  try {
    const { studentId, electiveSubjectId } = req.body;
    const student = await Student.findById(studentId);
    const electiveSubject = await ElectiveSubject.findById(electiveSubjectId);

    if (!student || !electiveSubject) {
      return res
        .status(404)
        .json({ error: "Student or Elective subject not found" });
    }

    const removedStudentElectiveSubject =
      await StudentElectiveSubject.findOneAndDelete({
        student: student._id,
        electiveSubject: electiveSubject._id,
      });

    if (!removedStudentElectiveSubject) {
      return res
        .status(404)
        .json({ error: "Student-Elective subject relationship not found" });
    }

    res.json({ message: "Student removed from elective subject successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
