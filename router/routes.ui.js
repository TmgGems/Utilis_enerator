//UI location manage garxa
const express = require("express");
const router = express.Router();

router.get("/",(req,res) =>{
    res.render("index");
})

router.get("/about",(req,res) =>{
  res.render("about");
})

router.get("/birds",(req,res) =>{
  res.render("birds");
})

router.get("/contact",(req,res) =>{
  res.render("contact");
})

router.get("/testimonial",(req,res) =>{
  res.render("testimonial");
})


router.get("/about",(req,res)=>{
  res.render("contact");
});

router.get("/message",(req,res)=>{
  res.render("message");
});

router.get("/converter/:currency1/:currency2/:value", async (req, res) => {
    const { currency1, currency2, value } = req.params; //params get value in string
    const currencyConverter = new CC({
      form: currency1,
      to: currency2,
      amount: Number(value),
    });
    const result = await currencyConverter.convert();
    res.send(`Converted Amount : ${result}`);
  });
  
module.exports = router;


/*axios().then().get()

instead of above 

//method 1


*/
