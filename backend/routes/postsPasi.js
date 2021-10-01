const express = require('express');
const PostsPasi = require('../models/postsPasi');

const router = express.Router();

//save posts

router.post('/postPasi/save',(req,res)=>{

    let newPostsPasi = new PostsPasi(req.body);

    newPostsPasi.save((err)=>{
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
router.get('/postsPasi',(req,res)=>{
    PostsPasi.find().exec((err,post)=>{
        if(err){
            return res.status(400).json({
            error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:post
        });
    });
});

//get a specific post

router.get("/postPasi/:id",(req,res) =>{
    let postId = req.params.id;

    PostsPasi.findById(postId,(err,post) =>{
      if(err){
          return res.status(400).jason({success:false,err});
        
      } 
         return res.status(200).json({
             success:true,
             post
         });
    });
});




//update posts

router.put('/post/updatePasi/:id',(req,res)=>{
    PostsPasi.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).jason({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete posts

router.delete('/post/deletePasi/:id',(req,res)=>{
    PostsPasi.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
});

module.exports = router;



