const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");

const app = express();

const indexRouter = require("./router");



//Setting up the third party middlewares
//middleware
// app.use((req,res,next) =>{
//     console.log("Request received at" + Date.now());
// });
app.use(morgan("short"));
app.use(cors());

//Setting up the EJS Templating
app.set("view engine","ejs");
app.set("views","./views");

app.use("/",indexRouter);


app.listen(8000, () => {// method vitra method call back function
    console.log("Server running on port 8000");
})