const mongoose = require("mongoose");

//step1：通过mongoose链接mongodb 27017
mongoose.connect("mongodb://127.0.0.1:27017/shops",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//step2:监听连接信息
mongoose.connection.on("connected",()=>{
    console.log("mongodb is connected!!!");
})
//step3:操作数据库 ODM
const Schema = mongoose.Schema;
let productSchema = new Schema({title:{type:String},price:{type:Number}});
let productModel = mongoose.model("products",productSchema);
let product = new productModel({title:"华为mate20",
                                     price:5000,
                                     title:"华为play",
                                     price:10000});
product.save((err,result)=>{
    console.log(result);
})
