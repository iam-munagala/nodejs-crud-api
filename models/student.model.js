const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        regdno:{
            type:String,
            unique:true,
            required:true 
        },
        mobile:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
)

const User = mongoose.model("user",userSchema);

module.exports = User;