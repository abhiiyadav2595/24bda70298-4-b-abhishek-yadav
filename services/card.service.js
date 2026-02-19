// services/card.service.js
import {
  findAllCards,
  findCardById,
  createCard,
  updateCard,
  deleteCard
} from "../models/card.model.js";

export function getPaginatedCards(page = 1, limit = 10) {
  const all = findAllCards();
  const totalCards = all.length;

  const pageNumber = Number(page) || 1;
  const pageLimit = Number(limit) || 10;

  const startIndex = (pageNumber - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;

  const paginatedCards = all.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalCards / pageLimit) || 1;

  const result = {
    totalCards,
    totalPages,
    currentPage: pageNumber,
    limit: pageLimit,
    cards: paginatedCards
  };

  if (endIndex < totalCards) {
    result.next = { page: pageNumber + 1, limit: pageLimit };
  }

  if (startIndex > 0) {
    result.previous = { page: pageNumber - 1, limit: pageLimit };
  }

  return result;
}

export function getCard(id) {
  return findCardById(id);
}

export function addCard(data) {
  return createCard(data);
}

export function editCard(id, data) {
  return updateCard(id, data);
}

export function removeCard(id) {
  return deleteCard(id);
}
