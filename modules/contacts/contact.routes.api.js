const express = require("express");
const router = express.Router();

const contactController = require("./contact.controller");

router.get("/", (req, res, next) => {
  res.json({ msg: "Hello from contact API!" });
});

router.post("/", (req, res, next) => {
  contactController
    .create(req.body)
    .then((d) => res.json(d))
    .catch((e) => next(e));
});

// Create
router.post("/", (req, res, next) => {
  contactController.create(req.body);
  res.json({ msg: "Thank you for submitting the form!" });
  res.json(result);
});

//List
router.get("/", async (req, res, next) => {
  try {
    const list = await contactController.list();
    res.json(list);
  } catch (e) {
    next(e);
  }
});

//getByID
router.get("/:id", async (req, res, next) => {
  try {
    const result = await contactController.getById(req.params.id);
    res.json(result);
  } catch (e) {
    console.log("err", e);
    next(e);
  }
});

// remove

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await contactController.remove(id);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

//Update
router.put("/:id", async (req, res, next) => {
  try {
    const payload = req.body;
    const result = await contactController.update(id, payload);
    res.json(result);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
