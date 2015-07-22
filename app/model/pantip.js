var config = require("./../../config");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect(config.database,function(err){
//    console.log("HI");
//    if(err){
//        console.log(err);
//    }else{
//        console.log('Connected to the database');
//    }
//});

var pantipSchema = new Schema({
    weburl: String,
    lineid: Number,
    email: String
});


module.exports = mongoose.model('Pantip', pantipSchema);