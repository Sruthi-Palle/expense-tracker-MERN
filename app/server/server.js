import express from "express";
import mongoose from "mongoose";

const app = express();
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
app.listen(4000, () => {
  console.log("Server is running at local host 4000");
});
