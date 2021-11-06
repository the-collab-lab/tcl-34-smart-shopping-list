const MS_TO_SEC = 1000;
const SEC_TO_MIN = 60;
const MIN_TO_HR = 60;
const HR_TO_DAY = 24;

const MS_TO_DAY = MS_TO_SEC * SEC_TO_MIN * MIN_TO_HR * HR_TO_DAY;

/*
This function receives a Date JS Object and returns 
an absolute rounded number indicating the difference
between those two dates in days.
*/
export const diffBetweenTodayAndDate = (date) => {
  const today = new Date();
  /*
    We're taking the difference between two dates in milliseconds
    given by the getTime() method and transform it to days.
  */
  const millisecondsDifference = (date.getTime() - today.getTime()) / MS_TO_DAY;
  return Math.abs(Math.round(millisecondsDifference));
};

export const ONE_DAY = 1;
