import { test, expect } from "@playwright/test";
import {shuffleMyDeck,} from "../api/apiShuffleDeck";
import users from "../data/users.json";

const deck_id = users.newUser.deck_id;

  test("Shuffle the Cards", async ({ request }) => {
    const shuffledDeck = await shuffleMyDeck(request, deck_id);

    console.log("Shuffled deck response:", shuffledDeck);

    expect(shuffledDeck.success).toBeTruthy();
    expect(shuffledDeck.shuffled).toBeTruthy();
    expect(shuffledDeck.deck_id).toBe(deck_id);
  });