let express=require("express");
let app=express();
let mongoose=require("mongoose");
let bodyParser=require('body-parser');
let {User}=require('./database/user.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/management",{useMongoClient:true});
//数据库连接成功验证
let db=mongoose.connection;
db.once("open",function () {
    console.log("connected success");
});
//I.跨域请求设置
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
//     res.header('Access-Control-Allow-Method', 'GET,POST,DELETE');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     if (req.method == 'OPTIONS') {
//         res.end();
//     } else {
//         next();
//     }
// });
//II.
//登录功能
app.post('/login',function (req, res) {
    let {username,password}=req.body;
    User.findOne({username,password},function (err,user) {
        if(username=="admin"&&password=="123"){
            res.send({resultCode:200,msg:"登录成功",username})
        }else{
            res.send({resultCode:301,msg:"登录失败"});
        }
    });
});
app.listen(4000);