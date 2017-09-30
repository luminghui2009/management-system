let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let UserSchema=new Schema({
    username:String,
    password:String,
    loginAt:{type:Date,default:Date.now}
});
exports.User=mongoose.model("User",UserSchema);