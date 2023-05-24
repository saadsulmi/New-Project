

const loadHome=(req,res)=>{
     res.render('user/home')
}

const login=(req,res)=>{
    try{
        res.render('user/login')
    }catch(error){
        console.log(error);
    }
}

const loginPost=(req,res)=>{
    try{
        console.log(req.body);
        res.render('user/shop')
    }catch(error){
        console.log(error);
    }
}

const registerUser=(req,res)=>{
    try{
        res.render('user/signup')
    }catch(error){
        console.log(error)
    }
}

const submitUser=(req,res)=>{
    try{
        console.log(req.body);
        res.redirect('/login')
    }catch(error){
        console.log(error)
    }
}

module.exports={
    loadHome,
    login,
    loginPost,
    registerUser,
    submitUser
}