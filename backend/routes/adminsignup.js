const express = require('express');
const adminsignup = require('../models/adminsignup');
const Adminsignup = require('../models/adminsignup');

const router = express.Router();

//save Admin-Signup

router.post('/adminsignup/save',(req,res)=>{

    let newAdminsignup = new Adminsignup(req.body);

    newAdminsignup.save((err)=>{
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

//get ADMIN SIGN UP
router.get('/adminsignup',(req,res) =>{
    Adminsignup.find().exec((err,adminsignup) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingAdminsignup:adminsignup
        });
    });
});

//update sign up

router.put('/adminsignup/update/:id',(req,res)=>{
    Adminsignup.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,adminsignup)=>{
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
router.delete('/adminsignup/delete/:id',(req,res)=>{
    Rentalcost.findByIdAndRemove(req.params.id).exec((err,deletedAdminsignup) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedAdminsignup
        });
    });
});


//get specific rental cost
router.get(`/adminsignup/:id`,(req,res) =>{
    let AdminsignupId = req.params.id;
    Adminsignup.findById(AdminsignupId,(err,adminsignup)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            adminsignup
        });
    });
});


module.exports = router;