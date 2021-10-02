const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    EmployeeID:{
        type:String,
        required:true
    },

   
    BirthDay:{
    type:String,
    required:true
    },

    EmployeePost:{
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

  


});

module.exports = mongoose.model('Adminsignup',adminSchema);