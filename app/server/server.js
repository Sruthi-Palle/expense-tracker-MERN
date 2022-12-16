import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
//import Transaction from "./models/transaction.js";
import TransactionApi from "./routes/TransactionsApi.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/transaction", TransactionApi);

mongoose.set("strictQuery", true);
await mongoose
  .connect(
    "mongodb+srv://sruthi:Sruthi12345@cluster0.j3tfalr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Mongodb connection is Successful"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world sruthi");
});
/*
app.post("/transaction", async (req, res) => {
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

app.get("/transaction", async (req, res) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  res.json({ data: transaction });
});
*/

app.listen(4000, () => {
  console.log("Server is running at local host 4000");
});
