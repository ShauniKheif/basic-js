const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  if (!options.separator) {
    options.separator = '+';
  }
  for(let i = 0; i < options.repeatTimes - 1; i++ ) {
    result.push(str);
    result.push(options.separator);
  }
  result.push(str);
  return result.join('');
};
