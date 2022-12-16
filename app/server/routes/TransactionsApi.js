import { Router } from "express";
import Transaction from "../models/TransactionModel.js";

const router = Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const { amount, description, date } = req.body;
  const transaction = new Transaction({
    amount: amount,
    description: description,
    date: date,
  });
  await transaction.save();
  res.json({ message: "success" });
});

router.get("/", async (req, res) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  res.json({ data: transaction });
});
export default router;
