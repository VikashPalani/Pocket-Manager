const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:50,
        },
        emailId: {
            type: String,
            required:true,
            trim:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid'+value);
                }
            },
        },
        password: {
            type: String,
            required:true,
            validate(value){
                if(!validator.isStrongPassword(value)){
                    throw new Error('Password is weak');
                }
            }
        },
        budget: {
            type: Number,
            required:true,
        },
        transactions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Transaction',
            }
        ]
    },
    {
        timestamps:true,
    },
);

userSchema.methods.validatePassword = async function(passwordInputByUser){
    const passwordHash = this.password;
    const isPasswordValid = await bcrypt.compare(passwordInputByUser,passwordHash);
    
    return isPasswordValid;
}

module.exports = mongoose.model('User', userSchema);
  