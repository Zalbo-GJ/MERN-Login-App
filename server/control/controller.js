import user from "../user.js"






const register = async(req,res)=>{
    const {name,email,password} = req.body 
    await user.create({name,email,password})
}






const login = async(req,res)=>{
    const {email,password} = req.body 
    user.findOne({'email': email}, 'email name password', function(err,user){
        if (err){
            console.log(err);
        }
       
        if (password == user.password){
            res.send("Login successful")
            console.log("success");

        }
        
    })
     
}

export {register,login}