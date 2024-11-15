const validator = require('validator');

const validateSignupData = (req) => {
    const {name,emailId,password} = req.body;

    if(!name || !emailId || !password){
        throw new Error("All fields are mandatory")
    }

    if(!validator.isEmail(emailId)){
        throw new Error("Invalid Email")
    }
};

module.exports = {validateSignupData};