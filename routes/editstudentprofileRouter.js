var router = require('express').Router();
/*const auth = require("../middleware/auth");*/
let  {editstudentProfile, getEditStudentProfile} = require('../controllers/userController');

router.get('/:id', 
/*auth,*/
 getEditStudentProfile);
router.patch('/:id', 
/*auth,*/
editstudentProfile);

module.exports = router;

