import { diffBetweenTodayAndDate } from './diffBetweenTodayAndDate';
import { TimeFrames } from './timeFrames';
import { getKeyByValue } from './getKeyByValue';
/***
 * First we verify by specificity and
 * we return the string that is used for the
 * aria-label and to add the proper style
 */

export const nextPurchaseDay = (
  daysUntilNextPurchase,
  lastPurchaseDate,
  numberOfPurchases,
  timeFrame,
) => {
  /**
   * After some checks, we noticed lastPurchasedDate is a Date object
   * and must be transformed to a day in order to properly compare
   * However, there are some cases where the item has not been bought yet
   * such as when the item has just been added to the list
   * in this case, the lastPurchaseDate value is undefined
   * and to avoid that error, we give a new Date() value
   *
   * After that, we can use diffBetweenTodayAndDate function to get
   * the difference in days between lastPurchaseDate and today.
   **/
  const lastPurchase = lastPurchaseDate
    ? lastPurchaseDate.toDate()
    : new Date();
  const daysSinceLastPurchase = diffBetweenTodayAndDate(lastPurchase);
  const nextEstimatedPurchase = 2 * daysUntilNextPurchase;

  if (numberOfPurchases === 0) {
    /*
    This either returns a string with soon, kindOfSoon or notAnySoon
    that'll depend on the timeframe that comes from Firestore
    */
    return getKeyByValue(TimeFrames, timeFrame);
  }
  if (
    numberOfPurchases === 1 ||
    daysSinceLastPurchase >= nextEstimatedPurchase
  ) {
    return 'inactive';
  }
  if (daysUntilNextPurchase < 7) {
    return 'soon';
  }
  if (daysUntilNextPurchase >= 7 && daysUntilNextPurchase <= 30) {
    return 'kindOfSoon';
  }
  if (daysUntilNextPurchase > 30) {
    return 'notAnySoon';
  }
};
