const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Boolean,
        required:true,
        default:false
    },
    is_blocked:{
        type:Boolean,
        default:false,
        required:true
    }
})