export async function shuffleMyDeck(request, deck_id) {
  const shuffleDeckResponse = await request.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/?deck_count=2`);
  const shuffleDeckResponseJson = await shuffleDeckResponse.json();

  return shuffleDeckResponseJson;
}

export async function checkRemainingCardsOnDeck(request, deck_id) {
  const checkRemainingCards = await request.get(`https://deckofcardsapi.com/api/deck/${deck_id}/`);
  const checkRemainingCardsJsone = await checkRemainingCards.json();

  return checkRemainingCardsJsone;
}

export async function reShuffleMyDeck(request, deck_id) {
  const reShuffleDeckResponse = await request.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/?remaining=true`);
  const reShuffleDeckResponseJson = await reShuffleDeckResponse.json();

  return reShuffleDeckResponseJson;
}
