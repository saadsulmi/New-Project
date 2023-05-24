const port=6006;
const express=require('express');
const app=express();
const nocache=require(('nocache'));
const mongo=require('./config/mongoose')
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoutes')
const path=require('path');

mongo.dataBaseUp();

app.set('view engine','ejs');
app.set('views','views')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/admin',adminRoute);

app.use('/',userRoute);

app.use(nocache());

app.listen(port,()=>{
 console.log("server connected "+port);
});