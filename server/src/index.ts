import express from "express";
import cors from "cors";
import { UserModel } from "./database/models/users.model";
import { connectDatabase } from "../config";

const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

app.get("/", async (req, res) => {
  await UserModel.create({
    firstName: "belgutei",
    lastName: "nagaan",
    email: "qwerty",
  });

  const result = await UserModel.findById("670c9b610a0ed2d105de4735");

  await UserModel.findByIdAndUpdate("670c9b610a0ed2d105de4735", {
    email: "uzkhu",
  });

  res.send("success");
});

app.listen(() => {
  console.log("https://mongodb-5x5r.onrender.com");
});
