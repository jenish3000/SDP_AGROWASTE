// this is a change
const express = require ('express');
const bcrypt=require('bcrypt');
const router =express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const config = require('config');
const User= require('../models/User')
const service=require('../models/Service')
const Admin=require('../models/Admin')
const {encryption}=require('../middleware/hasing')
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
const {check,validationResult} =require('express-validator/check');
const { response } = require('express');
const Company = require('../models/Company');
// const { default: Service } = require('../../src/Components/ServicePage/Service');
// router.get('/get',(req,res)=>{res.send("server is running")});
router.get('/',auth,async (req,res)=>{
    try{
        const User = await User.findById(req.user.id).select('-password');
        const Company = await Company.findById(req.user.id).select('-password');
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');
    }
});
// router.get('/',auth,async (req,res)=>{
//     try{
//         const User = await User.findById(req.user.id).select('-password');
//     } catch(err){
//         console.error(err.message)
//         res.status(500).send('Server Error');

//     }
// });

// [
//     check("email","plz enter valid email").isEmail(),
//     check("password","enter pass more than 4 letters").exists()
// ]

// router.post('/',async (req,res)=>{
//     const errors =validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()});
//     }

//     // console.log(req.body);

//     const {email,password}= req.body;
//     try{
//         let user = await User.findOne({email:email});
//         let company= await Company.findOne({email:email});
    
//         if(!user && !Company){
//             res.status(400).json({errors:[{msg:'Invalid User'}]});
//         }
//         const isMatch = password === user.password;

//         // const isMatch =await bcrypt.compare(password,user.password);
//         if(!isMatch){
//             res.status(400).json({errors:[{msg:'Invalid Credential'}]});
//         }
//         const payload ={
//             user:{
//                 id : user.id
//             }
//         }

//         jwt.sign(
//             payload,
//             config.get('jwtToken'),
//             {expiresIn:360000},
//             (err,token)=>{
//                 if(err){
//                     throw err;
//                 }
//                 res.json({token});
//             }
//             )
//     }catch(err){console.error(err.message);
//         res.status(500).send('Server Error');
//     }    
// });
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

router.post('/SignUpFarmer',encryption, async (req, res) => {
    try{
        console.log(req.body);
        const EmailExist = await User.findOne({ email: req.body.email });
        if (EmailExist) return res.status(200).send("Email exist");
        else{

            const newUser =await User.create({
                name: req.body.name,
                mobileno:req.body.mobileno,
                email: req.body.email,
                password: req.body.password,
               // userType: req.body.type
            });
            // console.log("Printed");
            console.log(newUser);
            if(newUser){
                res.json({success:true,msg:"successfully created company."})
            }
            else{
                res.status(401).json({success:false,msg:"company is not created."})
            }
            // newUser.save();
        }
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');

    }
});
router.post('/SignUpCompany',encryption, async (req, res) => {
    try{
        console.log(req.body);
        const EmailExist = await Company.findOne({ email: req.body.email });
        if (EmailExist) return res.status(200).send("Email exist");
        else{
            const newCom = await Company.create({
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
            //     console.log("Saved");
            //     res.redirect('/');
            // }).catch(err => res.status(300).send(err));
        }
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');

    }
});
router.post('/SignUpAdmin',encryption, async (req, res) => {
    try{
        console.log(req.body);
        const EmailExist = await Admin.findOne({ email: req.body.email });
        if (EmailExist) return res.status(200).send("Email exist");
        else{
            const newAd = await Admin.create({
                name: req.body.name,
                mobileno:req.body.mobileno,
                email: req.body.email,
                password: req.body.password,
               // userType: req.body.type
            });
            console.log("Printed",newAd);
            if(newAd){
                res.json({success:true,msg:"successfully created Admin."})
            }
            else{
                res.status(401).json({success:false,msg:"Admin is not created."})
            }

        //     newAd.save().then((result) => {
        //         console.log("Saved");
        //         res.redirect('/');
        //     }).catch(err => res.status(300).send(err));
     }
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');
    }
});
// router.login('/LoginFarmer',async(req,res)=>{
//     try{
//         console.log(req.body);
//         const EmailExist = await User.findOne({ email: req.body.email });
//         if(EmailExist){
//             if()
//         }
//     }

// })
router.post("/LoginFarmer", async (req, res) => {
    
    const { email, password } = req.body;
    const user = await User.findOne({email:req.body.email });
    // console.log(password);
    // console.log(user.password);
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
  
        // var token = jwt.sign({ email: user.email, password:upass  }, `${process.env.TOCKEN_PRIVATE_KEY}`);
  
        res.status(200).send({
          data: user,
        //   cookie: token,
          type: "Farmer",
          message: `Hello ${user.name}, You Logged in successfully!`,
        });
        
      } else
        res.status(201).send({ message: "Error! : *** Invalid Password ***" });
    } else {
      res.status(202).send({ message: "Error! : *** userNotfound ***" });
    }
  });
router.post("/LoginCompany", async (req, res) => {
    const { email, password } = req.body;
    const company = await Company.findOne({ email:email  });
    if (company) {
      if (await bcrypt.compare(password, company.password)) {
  
        // var token = jwt.sign({ email: company.email, password:company.password  }, `${process.env.TOCKEN_PRIVATE_KEY}`);
  
        res.status(200).send({
          data: company,
        //   cookie: token,
          type: "Company",
          message: `Hello ${company.name}, You Logged in successfully!`,
        });
  
      } else
        res.status(201).send({ message: "Error! : *** Invalid Password ***" });
    } else {
      res.status(202).send({ message: "Error! : *** userNotfound ***" });
    }
  });
router.post("/LoginAdmin", async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: req.body.email });
    if (admin) {
      if (await bcrypt.compare(password, admin.password)) {
  
        // var token = jwt.sign({ email: Admin.email, password:adpass  }, `${process.env.TOCKEN_PRIVATE_KEY}`);
  
        res.status(200).send({
          data: admin,
        //   cookie: token,
          type: "Admin",
          message: `Hello ${Admin.name}, You Logged in successfully!`,
        });
  
      } else
        res.status(201).send({ message: "Error! : *** Invalid Password ***" });
    } else {
      res.status(202).send({ message: "Error! : *** userNotfound ***" });
    }
  });
router.post('/Service', async (req, res) => {
    try{
        console.log(req.body);
        const EmailExist = await service.findOne({ email: req.body.email });
        if (EmailExist) return res.status(200).send("Already Requested!!!");
        else{
            const newSer = await service.create({
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
                res.json({success:true,msg:"successfully requested for harvesting."})
            }
            else{
                res.status(401).json({success:false,msg:"Request is not accepted."})
            }
            // newCom.save().then((result) => {
            //     console.log("Saved");
            //     res.redirect('/');
            // }).catch(err => res.status(300).send(err));
        }
    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error');

    }
});

module.exports = router;