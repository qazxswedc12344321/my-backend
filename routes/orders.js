const express = require("express");
const Order = require("../models/order");
const Product = require("../models/product");
const router = express.Router();

router.post("/", async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product || product.stock < quantity) {
    return res.status(400).json({ error: "商品库存不足或不存在" });
  }

  product.stock -= quantity;
  await product.save();

  const order = new Order({ productId, quantity });
  await order.save();

  res.status(201).json(order);
});

module.exports = router;
