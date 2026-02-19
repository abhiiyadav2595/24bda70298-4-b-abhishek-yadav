// routes/card.routes.js
import { Router } from "express";
import { findAllCards } from "../models/card.model.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    cards: findAllCards(),
    totalCards: findAllCards().length
  });
});

export default router;
