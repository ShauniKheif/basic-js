const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!date.getTime()) {
    throw new Error("Error");
  }
  let month = date.getMonth();
  let season = (month >= 2 && month <= 4) ? 'spring' :
  (month >= 5 && month <= 7) ? 'summer' :
  (month >= 8 && month <= 10) ? 'autumn' :
  'winter';
  return season;
};
