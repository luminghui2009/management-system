## 全局安装脚手架create-react-app
- npm install -g create-react-app
- create-react-app self
- cd self
- npm start
- 查看webpack配置文件 npm run eject
## 引入antd和按需加载样式插件babel-plugin-import
- 在babel-loader中的options选项中配置
```
plugins:[["import",{"libraryName":"antd","style":"css"}]]
```
- 在App文件下的index.css中引入antd
```
@import '~antd/dist/antd.css'
```
## 跑通路由
- 每个path对应一个路由路径Route
## 搭建服务server.js
- 使用node+express+mongoDB搭建后台和数据服务
- 启动mongoDB服务,在bin目录下打开cmd，输入mongod --dbpath=D:\mongoDB\data,显示27017端口号则数据库服务启动成功
- 测试服务器跟数据库连接成功
```
mongoose.connect("mongodb://localhost:27017/management",{useMongoClient:true});
let db=mongoose.connection;
db.once("open",function () {
    console.log("connected success");
});
```
- 跨域问题：前端页面端口号3000，后台服务端口号4000，可以使用两种方法
```
1.在server.js中设置cors跨域
app.use(function (req, res, next) {
     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
     res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
     res.header('Access-Control-Allow-Method', 'GET,POST,DELETE');
     res.header('Access-Control-Allow-Credentials', 'true');
     if (req.method == 'OPTIONS') {
         res.end();
     } else {
         next();
     }
 });
 2. 使用代理webpack中的proxy：在create-react-app脚手架的环境下，直接在package.json中设置"proxy": "http://localhost:4000/"即可
```
## 登录界面
- 登录时输入用户名和密码，后台验证，成功后则跳转至后台首页，后台返回一个token，前端
## 首页
### 头部
- 使用antd提供的Layout里的Header组件
### 左侧导航
- 使用antd提供的Menu导航菜单
### 中间内容展示

