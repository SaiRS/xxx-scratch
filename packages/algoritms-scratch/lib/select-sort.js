/* eslint-disable no-console, require-jsdoc*/

function selectSort(list) {
  const sortedList = [...list];

  for (let i = 0; i < sortedList.length; i++) {
    let minIndex = i;
    // 稳定性：当我从i开始时，是稳定的，而从i+1开始时，则不稳定
    for (let j = i; j < sortedList.length; j++) {
      if (sortedList[j] < sortedList[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    if (minIndex !== i) {
      // eslint-disable-next-line unicorn/prevent-abbreviations
      const temp = sortedList[minIndex];
      sortedList[minIndex] = sortedList[i];
      sortedList[i] = temp;
    }
  }

  return sortedList;
}

const numbers = [3, 2, 5, 2, 6, 1];
console.log(selectSort(numbers));

/* eslint-enable */
