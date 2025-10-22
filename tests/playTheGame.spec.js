import { test, expect } from "@playwright/test";
import { shuffleMyDeck } from "../api/apiShuffleDeck";
import { drawCardFromMyDeck } from "../api/apiDrawCards";
import { checkRemainingCardsOnDeck, reShuffleMyDeck } from "../api/apiShuffleDeck";
import users from "../data/users.json";
import { faker } from "@faker-js/faker";

const deck_id = users.newUser.deck_id;

test.describe.configure({ mode: 'serial' });

test("Shuffle the Cards", async ({ request }) => {
  const shuffledDeck = await shuffleMyDeck(request, deck_id);

  console.log("Shuffled deck response:", shuffledDeck);

  expect(shuffledDeck.success).toBeTruthy();
  expect(shuffledDeck.shuffled).toBeTruthy();
  expect(shuffledDeck.deck_id).toBe(deck_id);
});

test("Draw a Card", async ({ request }) => {
  const num = faker.number.int({ max: 10 });

  const drewACard = await drawCardFromMyDeck(request, deck_id, num);
  console.log(drewACard);
  console.log("Cards that have drawn are:");
  for (let i = 0; i < num; i++) {
    console.log(drewACard.cards[i].value, drewACard.cards[i].suit);
  }

  expect(drewACard.success).toBeTruthy();
  expect(drewACard.deck_id).toBe(deck_id);
});

test("Reshuffle the Cards without affecting remaining count", async ({ request }) => {
  const deckInfoBefore = await checkRemainingCardsOnDeck(request, deck_id);
  const deckInfoAfter = await reShuffleMyDeck(request, deck_id);
  const remainingBefore = deckInfoBefore.remaining;
  const remainingAfter = deckInfoAfter.remaining;

  console.log(remainingAfter);

  expect(deckInfoAfter.success).toBeTruthy();
  expect(remainingBefore).toBe(remainingAfter);
});
