const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (const iterator of backyard) {
    iterator.filter(item => {
      if (item === "^^") return count++;
    })
  }
  return count;
};
