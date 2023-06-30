const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

const indexRouter = require("./router")



//Setting up the third party middlewares
//middleware
// app.use((req,res,next) =>{
//     console.log("Request received at" + Date.now());
// });
app.use(morgan("short"));
app.use(cors());
//Json data structure
app.use(bodyParser.json());
//form data capture
app.use(bodyParser.urlencoded({extended:true}));

//Setting up the EJS Templating
app.set("view engine","ejs");
app.set("views","./views");

//Serving the static files
app.use(express.static("public"));

//Trying to test the application level error handler
app.get("/Broken",(req,res)=>{
    throw new Error("Broken");
})


app.use("/",indexRouter);

//Appplication level error handler
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send("Something Went Wrong");
})


app.listen(8000, () => {// method vitra method call back function
    console.log("Server running on port 8000");
})