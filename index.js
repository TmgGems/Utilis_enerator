const express = require("express");

const app = express();

const indexRouter = require("./router");

app.use("/",indexRouter)

app.listen(8000, () => {// method vitra method call back function
    console.log("Server running on port 8000");
})