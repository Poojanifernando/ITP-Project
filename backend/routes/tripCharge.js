const express = require('express');
const Posts = require('../models/tripCharge');

const router = express.Router();


//save posts
router.post('/trip/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err)=>{
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
router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts)=>{
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

router.get("/post/:id",(req,res)=>{
    let postId = req.params.id;
    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});




module.exports = router;
