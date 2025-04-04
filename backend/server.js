// const port = process.env.PORT ||  4000;
// const express =require("express")
// const app = express()
// const mongoose =require('mongoose')
// const jwt = require('jsonwebtoken')
// const multer = require('multer')
// const path = require('path')
// const cors = require('cors');
// const { error } = require("console");
// const { type } = require("os");


// app.use(express.json());
//  app.use(cors());
//  //2rwfPBmm1G16i29h

// // //Database Connection with MongoDB
// mongoose.connect("mongodb+srv://BhumikaDas:2rwfPBmm1G16i29h@cluster0.p6mzd.mongodb.net/e-commerce")

// // // //API creation
// app.get("/",(req,res)=>{
// res.send("Express App is Running")
// })

// //Tmage Storage engine
// const storage =multer.diskStorage({
//     destination : './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
// const upload = multer({storage:storage})
// //creating upload end \point for images
// //app.use('/images',express.static('upload/images'))
// app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success :1,
//        // image_url:`http://localhost:${port}/images/${req.file.filename}`
//     // image_url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//      image_url: `https://${req.get('host')}/images/${req.file.filename}`


//     })
// })

// //schema for Creating Products

// const Product = mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true,
        
//     },
//     name:{
//         type:String,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true

//     },
//     category:{
//         type:String,
//         required:true
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },old_price:{
//         type:Number,
//         required:true, 
//     },
//     date:{
//         type:Date,
//         default:Date.now
//     },
//     available:{
// type:Boolean,
// default:true,
//     },
// })
// app.post('/addproduct',async (req,res)=>{
//     let products =await Product.find({});
//     let id;
//     if(products.length>0){
// let last_product_array =products.slice(-1);
// let last_product =last_product_array[0]
// id = last_product.id+1
//     }else{
//         id =1
//     }
// const product =new Product({
//     id:id,
//     name:req.body.name,
//     image:req.body.image,
//     category:req.body.category,
//     new_price :req.body.new_price,
//     old_price :req.body.old_price,
// })
// console.log(product)
// await product.save();
// console.log("saved")
// res.json({
//     success:true,
//     name:req.body.name,
// })
// })
// //creating API for deleting product
// app.post('/removeproduct',async(req,res)=>{
// await Product.findOneAndDelete({id:req.body.id})
// console.log("removed")
// res.json({
//     success:true,
//     name:req.body.name
// })
// })
// //Creating APi getting all products
// app.get('/allproducts',async(req,res)=>{
//     let products = await Product.find({})
//     console.log("all products fetched")
//     res.send(products);
// })
// //Schema Creating for user model

// const Users =mongoose.model("Users",{
//     name:{
//         type: String,
//     },email:{
//         type:String,
//         unique:true,
//     },
//     password:{
//         type:String,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
// type:Date,
// default:Date.now,
//     }
// })

// //creating end point for registring users

// app.post('/signup',async(req,res)=>{

//     let check = await Users.findOne({email:req.body.email})
//     if(check){
//         return res.status(400).json({success:false,errors:"existing user found withsame email id"})
//     }
//     let cart ={};
//     for(let i = 0; i<300; i++){
//         cart[i] =0;
//     }
//     const user = new Users({
//         name:req.body.username,
//         email :req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     })
// await user.save();

// const data ={
//     user:{
//         id:user.id
//     }
// }
// const token = jwt.sign(data,'secret_ecom')
// res.json({success:true,token})

// })

// //creating end point for userogin

// app.post('/login',async(req,res)=>{
//     let user = await Users.findOne({email:req.body.email});
//     if(user){
//         const passCompare = req.body.password ===user.password;
//         if(passCompare){
//             const data ={
//                 user:{
//                     id:user.id
//                 }
//             }
//             const token =jwt.sign(data,'secret_ecom')
//             res.json({success:true,token})
//         }
//         else{
//             res.json({success:false,errors:'Wrong password'})
//         }
//     }
//     else{
//         res.json({success:false,errors:"Wrong Email ID"})
//     }
// })

// //creating endpoint for newcollection data
// app.get('/newcollections',async(req,res)=>{
// let products =await Product.find({});
// let newcollection =products.slice(1).slice(-8)
// console.log("NewCollection Fetched")
// res.send(newcollection)
// })

// //creating end point for popular in women section

// app.get('/popularinwomen',async(req,res)=>{
//     let products= await Product.find({category:"women"});
//     let popular_in_women =products.slice(0,4)
//     console.log("Popular in women fetched")
//     res.send(popular_in_women);
// })

// //creating middleware to fetch user
// const fetchUser = async(req,res,next)=>{
// const token = req.header('auth-token')
// if(!token){
//     res.status(401).send({errors:"Please authenticate using valid token"})
// }
// else{
//     try{
//         const data = jwt.verify(token,'secret_ecom');
//         req.user = data.user;
//         next();

//     }catch(error){
// res.status(401).send({errors: "Please authenticate using a valid token"})
//     }
// }
// }

// //creating endpoint for adding products for cart data

// app.post('/addtocart',fetchUser,async(req,res)=>{
//     console.log("Added",req.body.itemId);
//     let userData = await Users.findOne({_id:req.user.id});
//     userData.cartData[req.body.itemId] +=1;
//     await Users.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("Added")


// })

// //creating end point for remove product from cart data
// app.post('/removefromcart',fetchUser,async(req,res)=>{
//     console.log("removed",req.body.itemId);
    
//     let userData = await Users.findOne({_id:req.user.id});
//     if(userData.cartData[req.body.itemId]>0)
//     userData.cartData[req.body.itemId] -=1;
//     await Users.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("Removed")

// })

// //creating end point for getting cart data

// app.post('/getcart',fetchUser,async(req,res)=>{
// console.log("Getcart")
// let userData = await Users.findOne({_id:req.user.id})
// res.json(userData.cartData);


// })


// app.listen(port,(error)=>{
//     if(!error){
//         console.log("Server running on port"+port)
//     }else{
//         console.log("Error :" +error)
//     }
// })


// new code


const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://BhumikaDas:2rwfPBmm1G16i29h@cluster0.p6mzd.mongodb.net/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Cloudinary Configuration
cloudinary.config({
    cloud_name: "dffqiq8ix", // Replace with your Cloudinary cloud name
    api_key: "524827525971391", // Replace with your Cloudinary API key
    api_secret: "e5gUb3mJOKGfB5xSRr3ypkuZtmk", // Replace with your Cloudinary API secret
});

// Multer Storage Configuration for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "ecommerce_products", // Folder where images will be stored on Cloudinary
        format: async () => "png", // Convert images to PNG
        public_id: (req, file) => file.fieldname + "-" + Date.now(),
    },
});

const upload = multer({ storage: storage });

// API Test Route
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Upload Route (Uploads Image to Cloudinary)
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: req.file.path, // Cloudinary provides the URL here
       
    });
    console.log("Product Uploaded")
    
});

// Product Schema
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Store Cloudinary URL
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Add Product API
app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image, // Store Cloudinary Image URL
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    await product.save();
    res.json({ success: true, name: req.body.name });
});

// Delete Product API
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, name: req.body.name });
});

// Get All Products API
app.get("/allproducts", async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

// User Schema
const Users = mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// User Signup API
app.post("/signup", async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "User already exists" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
    res.json({ success: true, token });
});

// User Login API
app.post("/login", async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user && req.body.password === user.password) {
        const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
        res.json({ success: true, token });
    } else {
        res.json({ success: false, errors: "Invalid email or password" });
    }
});

// Fetch New Collections API
app.get("/newcollections", async (req, res) => {
    let products = await Product.find({});
    res.send(products.slice(1).slice(-8));
});

// Fetch Popular in Women Section API
app.get("/popularinwomen", async (req, res) => {
    let products = await Product.find({ category: "women" });
    res.send(products.slice(0, 4));
});

// Middleware for Authentication
const fetchUser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send({ errors: "Please authenticate with a valid token" });

    try {
        const data = jwt.verify(token, "secret_ecom");
        req.user = data.user;
        next();
    } catch {
        res.status(401).send({ errors: "Invalid token" });
    }
};

// Add to Cart API
app.post("/addtocart", fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findByIdAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added");
});

// Remove from Cart API
app.post("/removefromcart", fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0) userData.cartData[req.body.itemId] -= 1;
    await Users.findByIdAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Removed");
});

// Get Cart Data API
app.post("/getcart", fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
});

// Start Server
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running on port ${port}`);
    } else {
        console.log("Error: " + error);
    }
});
