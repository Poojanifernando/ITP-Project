const express = require('express');
const postAnodya = require('../models/postAnodya');
const PostAnodya = require('../models/postAnodya');

const router = express.Router();

//save rentalcost

router.post('/postAnodya/save',(req,res)=>{

    let newPostAnodya = new PostAnodya(req.body);

    newPostAnodya.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

//get postAnodya
router.get('/postAnodya',(req,res) =>{
    PostAnodya.find().exec((err,postAnodya) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPostAnodya:postAnodya
        });
    });
});

//update posts

router.put('/postAnodya/update/:id',(req,res)=>{
    PostAnodya.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,postAnodya)=>{
            if(err){
                return res.status(400).jason({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete post
router.delete('/postAnodya/delete/:id',(req,res)=>{
    PostAnodya.findByIdAndRemove(req.params.id).exec((err,deletedPostAnodya) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedPostAnodya
        });
    });
});


//get specific rental cost
router.get(`/postAnodya/:id`,(req,res) =>{
    let PostAnodyaId = req.params.id;
    PostAnodya.findById(PostAnodyaId,(err,postAnodya)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            postAnodya
        });
    });
});


module.exports = router;