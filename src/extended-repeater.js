const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.addition) {
    options.addition = '';
  }
  for(let i = 0; i < options.repeatTimes - 1; i++ ) {
    result.push(str);
    result.push(options.addition);
    result.push(options.separator);
  }
  result.push(str + options.addition);
  return result.join('');
};
