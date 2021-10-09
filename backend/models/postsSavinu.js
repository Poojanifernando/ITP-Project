const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    name :{
        type:String,
         required:true
     },

     employee :{
        type:String,
        required:true
    },

     address :{
         type:String,
         required:true
     },
 
     contact_number :{
         type:Number,
         required:true
     },

     nic :{
        type:String,
        required:true
     },

     driver_license :{
        type:Number,
        required:true
     },

     bank_number :{
        type:Number,
        required:true
     },

     user_name :{
        type:String,
        required:true
     }

    });

module.exports = mongoose.model('Employees', postSchema);