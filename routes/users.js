const express=require('express');
const userRoute=express();
const userController=require('../controllers/userController');

// userRoute.set("views", "./views/user");



userRoute.get('/',userController.loadHome);


module.exports=userRoute;