const User = require('../models/usermodel');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, key} = req.body;

    const userExists = await User.findOne({email});
    const securityKeyMatch = key===process.env.SECURITY_KEY;

    if(userExists){
        res.status(400).json('User Already Exists');
        throw new Error('User Already Exists');
    }

    if(!securityKeyMatch){
        res.status(400).json('Key Mismatch'); 
        throw new Error('Key Mismatch');   
    }

    const user = await User.create({
        name,
        email,
        password,

    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    }else{
        res.status(400).json('Error Occured');
        throw new Error('Error Occured');
    }


    res.json({email, password});
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }else{
        res.status(400).json('Invalid Credentials');
        throw new Error('Invalid Credentials');
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    localStorage.clear();
    res.status(201).json("user logged out");
    return;
});

module.exports = {registerUser, loginUser, logoutUser};