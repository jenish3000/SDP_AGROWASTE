const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true
    },
    acre:{
        type:String,
        required:true,
    },
    ptype:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    du1:{
        type:Date,
        required:true
    },
    du2:{
        type:Date,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    mtype:{
        type:String,
        required:true
    }
});

module.exports =mongoose.model('ServiceInfo',ServiceSchema);