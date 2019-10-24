/* eslint-disable no-console, require-jsdoc, unicorn/prevent-abbreviations*/
const insertSort = require('./insert-sort');

function shellSort(list) {
  let sortedList = [...list];

  let h = 1;
  while (h < sortedList.length / 3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    sortedList = insertSort(sortedList, h);
    // for (let i = h; i < sortedList.length; i++) {
    //   let iValue = sortedList[i];
    //   let j = i;
    //   for (; j > 0 && sortedList[j - h] > iValue; j -= h) {
    //     let temp = sortedList[j - h];
    //     sortedList[j - h] = sortedList[j];
    //     sortedList[j] = temp;
    //   }

    //   if (j !== i) sortedList[j] = iValue;
    // }

    h = Math.floor(h / 3);
  }

  return sortedList;
}

const numbers = [3, 2, 5, 2, 6, 1];
console.log(shellSort(numbers));

/* eslint-enable */
