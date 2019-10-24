/* eslint-disable no-console */

/**
 * 交换两个数
 * @param {number} a 第一个数
 * @param {number} b 第二个数
 * @returns {number[]} 交换后的对象
 */
function swap(a, b) {
  return [b, a];
}

/**
 * 冒泡排序
 * @param {number[]} list 待排的数组
 * @returns {number[]} 排序后的数组
 */
function bubbuleSort(list) {
  // copy
  const sortList = [...list];

  let swaped = false;
  for (let i = 0; i < sortList.length; i++) {
    swaped = false;
    for (let j = 0; j < sortList.length - i - 1; j++) {
      if (sortList[j] > sortList[j + 1]) {
        swaped = true;
        [sortList[j], sortList[j + 1]] = swap(sortList[j], sortList[j + 1]);
      }
    }

    if (!swaped) {
      break;
    }
  }

  return sortList;
}

const numbers = [3, 2, 5, 2, 6, 1];
console.log(bubbuleSort(numbers));

/* eslint-enable */
