const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }
  if (arr.length == 0) {
    return result;
  }
  if (!arr.includes(String)) {
      return arr;
  }
  return result;
};
