const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
   //form laekheko haru lekhne
    name:String
});

module.exports = mongoose.model("Contact",contactSchema);