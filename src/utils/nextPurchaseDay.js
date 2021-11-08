export const nextPurchaseDay = (
  daysUntilNextPurchase,
  lastPurchaseDate,
  numberOfPurchases,
) => {
  const nextEstimatedPurchase = 2 * daysUntilNextPurchase;
  if (numberOfPurchases === 1 || lastPurchaseDate === nextEstimatedPurchase) {
    return 'Inactive';
  }
  if (daysUntilNextPurchase < 7) {
    return 'Soon';
  }
  if (daysUntilNextPurchase >= 7 || daysUntilNextPurchase <= 30) {
    return 'Kind of soon';
  }
  if (daysUntilNextPurchase > 30) {
    return 'Not any soon';
  }
};
