const port=6006;
const express=require('express');
const app=express();
const nocache=require(('nocache'));
const mongo=require('./config/mongoose')
const userRoute=require('./routes/users')
const adminRoute=require('./routes/adminRoutes')
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/',userRoute);

app.use('/admin',adminRoute);

app.use(nocache());

mongo.dataBaseUp();





app.listen(port,()=>{
 console.log("server connected "+port);
});