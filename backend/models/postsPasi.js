const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    Bus_plate_number :{
       type:String,
        required:true
    },
    Bus_owners_name :{
        type:String,
        required:true
    },

    Bus_owners_phoneno :{
        type:String,
        required:true
    },
    
    Number_of_seats :{
        type:String,
        required:true
    },
    
    Condition :{
        type:String,
        required:true
    },

    Date :{
        type:String,
        required:true
        }
    
});

module.exports = mongoose.model('Posts', postSchema);

