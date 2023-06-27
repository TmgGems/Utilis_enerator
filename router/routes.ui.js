//UI location manage garxa
const express = require("express");
const router = express.Router();

router.get("/",(req,res) =>{
    res.send("Hello From UI");
})

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
