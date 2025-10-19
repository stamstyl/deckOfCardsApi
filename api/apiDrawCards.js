export async function drawCardFromMyDeck(request, deck_id, num) {
  const drawACard = await request.put(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num}`);
  const drawACardJson = await drawACard.json();

  return drawACardJson;
}