export const sortProductsByTime = (products) =>
  products.sort((a, b) => {
    /***
     * First we verified if days are equals in order to sort names alphabetically
     * If not we sort the items by the days
     */
    if (a.daysUntilNextPurchase > b.daysUntilNextPurchase) {
      return 1;
    }
    if (a.daysUntilNextPurchase === b.daysUntilNextPurchase) {
      if (a.productName > b.productName) {
        return 1;
      }
    }
    return -1;
  });
