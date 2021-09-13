const { request } = require('express');
const express = require('express');
const Drivers = require('../models/postsRamona');
//Posts->Drivers
const router = express.Router();

//save posts

router.post('/postRamona/save',(req,res)=>{
//-/post -> /postRamona
    let newDriver = new Drivers(req.body);
//newPost-> newDriver  //Posts->Drivers
    newDriver.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Saved successfully"
        });
    });
});

//getpost
router.get('/postsRamona',(req,res)=>{  //posts ->postsRamona
    Drivers.find().exec((err,posts)=>{   //Posts->Drivers
        if(err){
            return res.status(400).json({
            error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specific post

router.get("/postRamona/:id",(req,res) =>{   //post ->postRamona
    
    let driverId = req.params.id;    //postId ->driverId

    Drivers.findById(driverId,(err,post) =>{   //Posts->Drivers
        if(err){
            return res.status(400).json({success:false, err});
        }
        //if no error has occured
        return res.status(200).json({
            success:true,
            post
        });

    });
});

//update posts

router.put('/post/updateRamona/:id',(req,res)=>{ //update-> updateRamona
    Drivers.findByIdAndUpdate(   //Posts->Drivers
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete posts

router.delete('/post/deleteRamona/:id',(req,res)=>{  //delete-> deleteRamona
    Drivers.findByIdAndRemove(req.params.id).exec((err,deletedDriver) => {  //Posts->Drivers

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedDriver
        });
    });
});

module.exports = router;