const linearSearch = (list, target) => {
  // Returns the index position of the target if found, if else returns None

  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
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

const result = linearSearch(numbers, 10);
verify(result);
