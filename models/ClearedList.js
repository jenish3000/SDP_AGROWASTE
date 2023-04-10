const mongoose = require('mongoose');

const ClearedList = mongoose.Schema({
     tResidue:{
        type : text,
        required:true,
    },
    tgrain : {
        type : text,
        required : true,
         
    },
    sdate :{
        type : date,
        required : true,
    }
});

const model = mongoose.model("ClearedList",ClearedList);

module.exports = model;