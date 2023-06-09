const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");

router.get("/inventory", async (req, res) => {
  try {
    const inventoryData = await Inventory.findAll();
    res.send(inventoryData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/inventory/:id", async (req, res) => {
  try {
    const inventoryData = await Inventory.findByPk(req.params.id);
    res.send(inventoryData);
  } catch (error) {
    console.log(error);
  }
});

router.post("/inventory", (req, res) => {
  console.log("bodyyyyyyyy", req.body);
  Inventory.build(req.body)
    .save()
    .then((data) => {
      console.log("dataaaaaaaa", data);
      res.send(data);
    })
    .catch((err) => res.send(err));
});

router.put("/inventory/:id", async (req, res) => {
  const updatedData = {
    productName: req.body.productName,
    prodDesc: req.body.prodDesc,
    qty: parseInt(req.body.qty) - 1,
  };
  const data = await Inventory.update(updatedData, {
    where: { id: req.params.id },
  });
  console.log("dddddddddddddd", updatedData);
  res.send(updatedData);
});

module.exports = router;
