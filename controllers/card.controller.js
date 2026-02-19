// controllers/card.controller.js
import {
  getPaginatedCards,
  getCard,
  addCard,
  editCard,
  removeCard
} from "../services/card.service.js";

export function listCards(req, res) {
  const { page, limit } = req.query;
  const result = getPaginatedCards(page, limit);
  res.json(result);
}

export function getSingleCard(req, res) {
  const id = Number(req.params.id);
  const card = getCard(id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(card);
}

export function createCardHandler(req, res) {
  const { suit, value, collection } = req.body;

  if (!suit || !value || !collection) {
    return res
      .status(400)
      .json({ message: "suit, value and collection are required" });
  }

  const newCard = addCard({ suit, value, collection });
  res.status(201).json(newCard);
}

export function updateCardHandler(req, res) {
  const id = Number(req.params.id);
  const updated = editCard(id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(updated);
}

export function deleteCardHandler(req, res) {
  const id = Number(req.params.id);
  const ok = removeCard(id);

  if (!ok) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.status(204).send();
}
