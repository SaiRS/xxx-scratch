/* eslint-disable no-console, require-jsdoc*/

module.exports = function insertSort(list, gap = 1) {
  const sortedList = [...list];

  for (let i = gap; i < sortedList.length; i++) {
    let iValue = sortedList[i];
    // 排序
    let j = i;
    while (j > 0 && sortedList[j - gap] > iValue) {
      sortedList[j] = sortedList[j - gap];
      j -= gap;
    }

    if (j !== i) sortedList[j] = iValue;
  }

  return sortedList;
};

// const numbers = [3, 2, 5, 6, 1, 9];
// console.log(insertSort(numbers));

/* eslint-enable */
