// ## authRouter
// - POST /signup
// - POST /login
// - POST /logout

const express = require('express');
const authRouter = express.Router();

const {validateSignupData} = require('../utils/validation');
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Signup Route - Name,EmailId, and Password is required - Saves the user to the database
authRouter.post('/signup', async (req, res) => {

    try {
        // Validate the incoming request using the validateSignupData util function
        validateSignupData(req);

        // If the request is valid, create a new user
        const {name, emailId, password,budget} = req.body;
        const passwordHash = await bcrypt.hash(password,10);

        //Creating an instance of the User model
        const user = new User({
            name,
            emailId,
            password: passwordHash,
            budget,
        });

        await user.save();
        res.send("User created successfully");
    }
    catch (error) {
        res.status(400).send("ERROR: "+error.message);
    }

});

// Login Route - EmailId and Password is required - Checks if the user exists in the database and logs in the user
authRouter.post('/login', async(req, res) => {
    try {
       const {emailId,password} = req.body;

       //Check if the user exists in the database
       const user = await User.findOne({emailId: emailId});
       if(!user){
        throw new Error("Invalid Credentials");
       }

         //Check if the password is valid
       const isPasswordValid = await user.validatePassword(password);
       if(!isPasswordValid){
        throw new Error("Invalid Credentials");
       }

       //If the user exists and the password is valid, then log in the user
       //Store the user data in the session
       req.session.user = {
              userId: user._id,
              name: user.name,
              emailId: user.emailId,
       }
        //res.send("User logged in successfully", req.session.user);
        res.json({
            message: "User logged in successfully",
            user: req.session.user,
        });
    } 
    catch (error) {
        res.status(400).send("ERROR: "+error.message);  
    }

});

// Logout Route - Logs out the user
authRouter.post('/logout', async (req, res) => {

    //Destroy the session and log out the user
    req.session.destroy((err) => {
        if(err){
            res.status(400).send("ERROR: "+err.message);
        }
        res.send("User logged out successfully");
    }
    );
});

module.exports = authRouter;