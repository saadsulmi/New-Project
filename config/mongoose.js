const  dataBaseUp = async ()=>{
    const mongoose=require('mongoose');
    mongoose.set('strictQuery',true);
    mongoose.connect("mongodb://127.0.0.1:27017/testDB");
    mongoose.connection.once('open',()=>{
        console.log("DB connected succefully");
    })
}

module.exports={dataBaseUp}