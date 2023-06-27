const express = require("express");

const app = express();
const morgan =require("morgan");
const indexRouter = require("./router");




//middleware
// app.use((req,res,next) =>{
//     console.log("Request received at" + Date.now());
// });
app.use(morgan("tiny"));
app.use("/",indexRouter);


app.listen(8000, () => {// method vitra method call back function
    console.log("Server running on port 8000");
})