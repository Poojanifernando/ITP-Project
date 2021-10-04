const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    Trip_id :{
        type:String,
        required:true
    },
    
    Driver_name :{
       type:String,
        required:true
    },
    Drivers_phone_no :{
        type:String,
        required:true
    },

    Plate_number :{
        type:String,
        required:true
    },
    
    Route :{
        type:String,
        required:true
    },

    Route2 :{
        type:String,
        required:true
    },
    
    Date_Time:{
        type:String,
        required:true
    }

    
});

module.exports = mongoose.model('PostsPasindu', postSchema);

