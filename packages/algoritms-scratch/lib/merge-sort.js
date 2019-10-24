/* eslint-disable no-console, require-jsdoc, unicorn/prevent-abbreviations*/

function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }

  let mid = Math.floor(list.length / 2);
  let sortLeft = mergeSort([...list].splice(0, mid));
  let sortRight = mergeSort([...list].splice(mid));
  return merge(sortLeft, sortRight);
}

function merge(listA, listB) {
  let length = listA.length + listB.length;
  let results = [];

  let indexA = 0;
  let indexB = 0;
  for (let k = 0; k < length; k++) {
    if (indexA >= listA.length) {
      results[k] = listB[indexB++];
      continue;
    }

    if (indexB >= listB.length) {
      results[k] = listA[indexA++];
      continue;
    }

    if (listA[indexA] > listB[indexB]) {
      results[k] = listB[indexB++];
    } else {
      results[k] = listA[indexA++];
    }
  }

  return results;
}

const numbers = [3, 2, 5, 2, 6, 1, 9, -1];
console.log(mergeSort(numbers));

/* eslint-enable */
