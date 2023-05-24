const express=require('express');
const userRoute=express();
const userController=require('../controllers/userController');


userRoute.get('/',userController.loadHome);

userRoute.get('/login',userController.login);

userRoute.post('/login',userController.loginPost);

userRoute.get('/register',userController.registerUser);

userRoute.post('/register',userController.submitUser);

module.exports=userRoute;