// index.js
import express from "express";
import cors from "cors";
import cardsRouter from "./routes/card.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Card API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/cards", cardsRouter);