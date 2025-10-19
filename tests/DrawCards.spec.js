import { test, expect } from '@playwright/test';
import { drawCardFromMyDeck } from '../api/apiDrawCards';
import users from '../data/users.json';

const deck_id = users.newUser.deck_id;
let num;

test.only('Draw a Card', async ({ request }) => {
  num = 5;

  const drewACard = await drawCardFromMyDeck(request, deck_id, num);
  console.log(drewACard);
  console.log('Cards that have drawn are:');
  for (let i = 0; i < num; i++){
    console.log(drewACard.cards[i].value, drewACard.cards[i].suit);
  }
  
  expect(drewACard.success).toBeTruthy();
  expect(drewACard.deck_id).toBe(deck_id);
});  