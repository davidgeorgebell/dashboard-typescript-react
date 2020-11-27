export const formatTime = (datetime: string) => {
  const timeObj = new Date(datetime);
  return `${timeObj.getHours()}:${String(timeObj.getMinutes()).padStart(
    2,
    '0'
  )}`;
};
