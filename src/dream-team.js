const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }

  let dreamName = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      members[i] = members[i].trim();
      dreamName.push(members[i][0]);
    } 
    else if (typeof members[i] == "array") {
      let arr = members[i];
      for (let a = 0; a < arr.length; a++) {
        arr[a] = arr[a].trim();
        dreamName.push(arr[a][0]);
      }
    }
  }
  dreamName = dreamName.join("").toUpperCase();
  dreamName = dreamName.split("").sort().join("");
  return (dreamName);
}
