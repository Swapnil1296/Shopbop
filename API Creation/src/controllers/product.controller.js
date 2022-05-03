const express = require("express");
const topLooser = require("../models/product.model");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const toplooser = await topLooser.find().lean().exec();
    return res.status(200).send(toplooser);
  } catch (err) {
    return res.status(500).send({message: err.message});
  }
});

router.post("", async (req, res) => {
  try {
    const toplooser = await topLooser.create(req.body);
    return res.status(200).send(toplooser);
  } catch (err) {
    return res.status(500).send({message: err.message});
  }
});

module.exports = router;
