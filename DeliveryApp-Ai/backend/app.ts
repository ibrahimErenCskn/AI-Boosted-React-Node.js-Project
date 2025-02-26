import { prisma } from "./prisma/prisma";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/products", async (req, res) => {
  const products = await prisma.user.findMany();
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
