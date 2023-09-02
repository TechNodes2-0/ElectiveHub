const {getAllStudents,insertDummyData,addStudent,updateStudent,getStudentById,deleteStudent} =require('../Controllers/StudentController');
const router = require('express').Router()

router.get('/allstudents',getAllStudents)
router.get('/getstudent/:id', getStudentById);
router.post('/addstudent',addStudent)
router.post('/insertdummydata', insertDummyData)
router.put('/UpdateStudent/:id',updateStudent)
router.delete('/DeleteStudent/:id',deleteStudent)

module.exports=router;