
const{getAllSubjects,getSubjectById,updateSubject,deleteSubject,insertSubjectDummyData,addSubject}= require('../Controllers/ElectiveSubjectController');
const router = require('express').Router()

router.get('/allsubjects',getAllSubjects)
router.get('/getsubject/:id', getSubjectById);
router.post('/addsubject',addSubject)
router.post('/insertsubjectdummydata',insertSubjectDummyData)
router.put('/updateSubject/:id',updateSubject)
router.delete('/deleteSubject/:id',deleteSubject)

module.exports=router;