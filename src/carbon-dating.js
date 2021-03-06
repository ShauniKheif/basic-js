const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) {
    return false; 
  }
   else if (parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false; 
  }  
  else if (!parseFloat(sampleActivity)) {
    return false; 
  } 

  else if (typeof sampleActivity != "string") {
    return false;
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY/Number(sampleActivity))) / (0.693/HALF_LIFE_PERIOD)); 
};
