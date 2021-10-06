const binarySearch = (list, target) => {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midPoint = Math.floor((first + last) / 2);

    if (list[midPoint] === target) {
      return midPoint;
    } else if (list[midPoint] < target) {
      first = midPoint + 1;
    } else {
      last = midPoint - 1;
    }
  }

  return false;
};

const verify = (index) => {
  if (index !== false) {
    console.log("Target found at index: ", index);
  } else {
    console.log("Target not found");
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = binarySearch(numbers, 12);
verify(result);
