import { test, expect } from "@playwright/test";
import {checkRemainingCardsOnDeck,reShuffleMyDeck,} from "../api/apiShuffleDeck";
import users from "../data/users.json";

const deck_id = users.newUser.deck_id;

test("Reshuffle the Cards without affecting remaining count", async ({request}) => {
    const deckInfoBefore = await checkRemainingCardsOnDeck(request, deck_id);
    const deckInfoAfter = await reShuffleMyDeck(request, deck_id);
    const remainingBefore = deckInfoBefore.remaining;
    const remainingAfter = deckInfoAfter.remaining;
    
    console.log(remainingAfter);

    expect(deckInfoAfter.success).toBeTruthy();
    expect(remainingBefore).toBe(remainingAfter); // ensures we didn't shuffle away drawn cards
  });