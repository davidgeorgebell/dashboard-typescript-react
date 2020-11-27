export const isLeapYear = (date: number) => {
  if (date % 4 !== 0) {
    return false;
  } else if (date % 100 !== 0) {
    return true;
  } else if (date % 400 !== 0) {
    return false;
  } else return true;
};
