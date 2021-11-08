export const nextPurchaseDay = (
  daysUntilNextPurchase,
  lastPurchaseDate,
  numberOfPurchases,
) => {
  const nextEstimatedPurchase = 2 * daysUntilNextPurchase;
  if (numberOfPurchases === 1 || lastPurchaseDate === nextEstimatedPurchase) {
    return 'inactive';
  }
  if (daysUntilNextPurchase < 7) {
    return 'soon';
  }
  if (daysUntilNextPurchase >= 7 || daysUntilNextPurchase <= 30) {
    return 'kindOfSoon';
  }
  if (daysUntilNextPurchase > 30) {
    return 'notAnySoon';
  }
};
