var emptyArr = [];

module.exports = {

addList: function getArr(num) {
  emptyArr.push(num)
  return emptyArr;
  },

ascend: function sort() {
  emptyArr.sort(function(a, b){
    return a - b
  });
  return emptyArr
}

}

// console.log(module.exports.addList(3))
// Create a module that exports a function that
// takes a number as a parameter and stores it in a
// list. The list should not be accessible from
// outside the module.

