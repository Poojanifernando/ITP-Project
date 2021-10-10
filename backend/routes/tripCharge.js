const express = require('express');
const tripCharge = require('../models/tripCharge');

const router = express.Router();


//save posts
router.post('/tripNisura/save',(req,res)=>{

    let newPostNisura1 = new tripCharge(req.body);

    newPostNisura1.save((err)=>{
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


//getpost
router.get('/postsNisura1',(req,res)=>{
    tripCharge.find().exec((err,postsNisura1)=>{
        if(err){
            return res.status(400).json({
                error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingPostsNisura1:postsNisura1
        });
    });
});

//get a specific post

router.get("/postNisura1/:id",(req,res)=>{
    let postId = req.params.id;
    tripCharge.findById(postId,(err,postNisura1)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            postNisura1
        });
    });
});




module.exports = router;
