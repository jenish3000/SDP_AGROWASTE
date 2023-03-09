// this is a change
const express = require ('express');
const router =express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const config = require('config');
const User= require('../models/User')
const Company=require('../models/Company')
const service=require('../models/Service')
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
const {check,validationResult} =require('express-validator/check');
const { response } = require('express');
// const { default: Service } = require('../../src/Components/ServicePage/Service');
router.get('/get',(req,res)=>{res.send("server is running")});
router.get('/',auth,async (req,res)=>{
    try{
        const User = await User.findById(req.user.id).select('-password');
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');

    }
});

// [
//     check("email","plz enter valid email").isEmail(),
//     check("password","enter pass more than 4 letters").exists()
// ]

router.post('/',async (req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    // console.log(req.body);

    const {email,password}= req.body;
    try{
        let user = await User.findOne({email:email});
        if(!user){
            res.status(400).json({errors:[{msg:'Invalid User'}]});
        }
        const isMatch = password === user.password;

        // const isMatch =await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({errors:[{msg:'Invalid Credential'}]});
        }
        const payload ={
            user:{
                id : user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtToken'),
            {expiresIn:360000},
            (err,token)=>{
                if(err){
                    throw err;
                }
                res.json({token});
            }
            )
    }catch(err){console.error(err.message);
        res.status(500).send('Server Error');
    }    
});

router.post('/SignUpFarmer', async (req, res) => {
    try{
        console.log(req.body);
        const EmailExist = await User.findOne({ email: req.body.email });
        if (EmailExist) return res.status(200).send("Email exist");
        else{
            const newUser = new User({
                name: req.body.name,
                mobileno:req.body.mobileno,
                email: req.body.email,
                password: req.body.password,
               // userType: req.body.type
            });
            // console.log("Printed");
            newUser.save().then((result) => {
                // console.log("Saved");
                res.redirect('/');
            }).catch(err => res.status(300).send(err));
        }
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');

    }
});
router.post('/SignUpCompany', async (req, res) => {
    try{
        console.log(req.body);
        const EmailExist = await Company.findOne({ email: req.body.email });
        if (EmailExist) return res.status(200).send("Email exist");
        else{
            const newCom = new Company({
                name: req.body.name,
                mobileno:req.body.mobileno,
                email: req.body.email,
                password: req.body.password,
               // userType: req.body.type
            });
            console.log("Printed",newCom);
            if(newCom){
                res.json({success:true,msg:"successfully created company."})
            }
            else{
                res.status(401).json({success:false,msg:"company is not created."})
            }
            // newCom.save().then((result) => {
            //     // console.log("Saved");
            //     res.redirect('/');
            // }).catch(err => res.status(300).send(err));
        }
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');

    }
});
router.post('/Service', async (req, res) => {
    try{
        console.log(req.body);
        const EmailExist = await service.findOne({ email: req.body.email });
        if (EmailExist) return res.status(200).send("Already Requested!!!");
        else{
            const newSer = new service({
                email:req.body.email,
                mobileno:req.body.mobileno,
                acre: req.body.acre,
                ptype: req.body.ptype,
                date: req.body.date,
                du1: req.body.du1,
                du2: req.body.du2,
                type: req.body.type,
                mtype: req.body.mtype,
               // userType: req.body.type
            });
            console.log("Printed",newSer);
            if(newSer){
                res.json({success:true,msg:"successfully created company."})
            }
            else{
                res.status(401).json({success:false,msg:"company is not created."})
            }
            // newCom.save().then((result) => {
            //     // console.log("Saved");
            //     res.redirect('/');
            // }).catch(err => res.status(300).send(err));
        }
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');

    }
});

module.exports = router;