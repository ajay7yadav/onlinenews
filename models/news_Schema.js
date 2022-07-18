const mongoose = require('mongoose');

const News = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('news',News);