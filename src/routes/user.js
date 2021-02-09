const express = require('express');
const { signup, signin,profile } = require('../controller/user');
const router=express.Router();


router.post('/signin',signin);
router.post('/signup',signup);
router.post('/profile',profile);

module.exports=router;