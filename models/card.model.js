// models/card.model.js

export const cards = [
  { id: Date.now(), suit: "diamonds", value: "queen", collection: "royal" }
];

export function findAllCards() {
  return cards;
}

export function findCardById(id) {
  return cards.find((card) => card.id === id);
}

export function createCard(data) {
  const newCard = {
    id: Date.now(),
    suit: data.suit,
    value: data.value,
    collection: data.collection
  };
  cards.push(newCard);
  return newCard;
}

export function updateCard(id, data) {
  const index = cards.findIndex((card) => card.id === id);
  if (index === -1) return null;

  cards[index] = { ...cards[index], ...data };
  return cards[index];
}

export function deleteCard(id) {
  const index = cards.findIndex((card) => card.id === id);
  if (index === -1) return false;

  cards.splice(index, 1);
  return true;
}
