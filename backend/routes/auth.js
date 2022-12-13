const router = require('express').Router();
const User = require('../model/User');
const {registerValidate, loginValidate} = require('../validate');
const bcrypt = require('bcryptjs');



router.post('/register', async (req,res) => {

    const {error} = registerValidate(req.body);
    if(error) return res.send(error.details[0].message);
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.send('Email already exists')

    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(req.body.password,salt)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashpass
    });
    try {
        const saved = await user.save();
        res.send(saved) 
    } catch (err) {
        res.send(err)
    }
    
   
});

router.post('/login', async (req,res) => {
    const {error} = loginValidate(req.body);
    if (error) return res.send(error.details[0].message);

    const user = await User.findOne({email:req.body.email});
    if (!user) return res.send('Email not registerd yet');

    const validpass = await bcrypt.compare(req.body.password,user.password);
    if (!validpass ) return res.send("Wrong Password")

    res.send("you are logged in")
})


module.exports = router;    