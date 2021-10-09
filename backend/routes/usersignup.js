const express = require('express');
const usersignup = require('../models/usersignup');
const Usersignup = require('../models/usersignup');

const router = express.Router();

//save User-Signup

router.post('/usersignup/save',(req,res)=>{

    let newUsersignup = new Usersignup(req.body);

    newUsersignup.save((err)=>{
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

//get user SIGN UP
router.get('/usersignup',(req,res) =>{
    Usersignup.find().exec((err,usersignup) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingUsersignup:usersignup
        });
    });
});

//update sign up

router.put('/usersignup/update/:id',(req,res)=>{
    Usersignup.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,usersignup)=>{
            if(err){
                return res.status(400).jason({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete sign up
router.delete('/usersignup/delete/:id',(req,res)=>{
    Usersignup.findByIdAndRemove(req.params.id).exec((err,deletedUsersignup) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedUsersignup
        });
    });
});


//get specific details
router.get(`/usersignup/:id`,(req,res) =>{
    let UsersignupId = req.params.id;
    Usersignup.findById(UsersignupId,(err,usersignup)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            usersignup
        });
    });
});


module.exports = router;