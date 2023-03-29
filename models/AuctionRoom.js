const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Code :{
        type : String,
        required : true,
        unique : true
    }
});

const RoomModel = mongoose.model('Room',RoomSchema);

module.exports = RoomModel;