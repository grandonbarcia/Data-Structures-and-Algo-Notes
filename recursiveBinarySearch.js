const recursiveBinarySearch = (list, target) => {
  if (list.length === 0) return false;

  let midPoint = Math.floor(list.length / 2);

  if (list[midPoint] === target) {
    return true;
  } else if (list[midPoint] < target) {
    return recursiveBinarySearch(list.splice(midPoint + 1), target);
  } else {
    return recursiveBinarySearch(list.splice(0, midPoint - 1), target);
  }
};

const verify = (result) => {
  console.log("Target Found: ", result);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = recursiveBinarySearch(numbers, 0);
verify(result);
