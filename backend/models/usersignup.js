const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Age:{
        type:String,
        required:true
    },

   
    BirthDay:{
    type:String,
    required:true
    },

    Address:{
    type:String,
    required:true
    },

    ContactNumber:{
        type:String,
        required:true
        },

    Email:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    },
    Password2:{
        type:String,
        required:true
    },

  


});

module.exports = mongoose.model('Usersignup',userSchema);