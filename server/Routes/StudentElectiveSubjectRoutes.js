const {addElectiveSubjectToStudent,removeElectiveSubjectFromStudent,getElectiveSubjectsForStudent,getStudentsForElectiveSubject,editSubjectOfStudent,addStudentToElectiveSubject,removeStudentFromElectiveSubject}=require('../Controllers/StudentElectiveSubjectController');
const router = require('express').Router()
router.post("/addElectiveSubjectToStudent",addElectiveSubjectToStudent);
router.post("/addStudentToElectiveSubject",addStudentToElectiveSubject);
router.get("/getElectiveSubjectsForStudent/:id",getElectiveSubjectsForStudent);
router.put("/editSubjectOfStudent",editSubjectOfStudent);
router.delete("/removeElectiveSubjectFromStudent",removeElectiveSubjectFromStudent);
router.delete("/removeStudentFromElectiveSubject",removeStudentFromElectiveSubject);
router.get("/getStudentsForElectiveSubject/:id",getStudentsForElectiveSubject);
module.exports= router;