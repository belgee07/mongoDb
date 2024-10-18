import express from "express";
import cors from "cors";
import { UserModel } from "../database/models/users.model";
import { connectDatabase } from "../database/config";

const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

app.get("/", async (req, res) => {
  await UserModel.create({
    firstName: "qw",
    lastName: "aa",
    email: "qwerty",
  });

  const result = await UserModel.findById("670c9b610a0ed2d105de4735");

  await UserModel.findByIdAndUpdate("670c9b610a0ed2d105de4735", {
    email: "belge0722",
  });

  res.send("success");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
