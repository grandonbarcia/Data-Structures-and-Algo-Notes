// Big - O
// How code slows as your data grows
// Not measure how many times it can do it one transaction
// Not the same as running time
// Big trend over time

// if we give it 10x more data how much  longer will it take
// 10x Data -> ??x time

// TERMINOLOGY
// O(n)
// N: How much data you have
// O: "Order of" running time grows in some order of some math experssion of N

// EXAMPLE

// Counting beans

//O(n)
const beans = [1, 2, 3];
let count = 0;
for (index in array) {
  count++;
}

// OR

//O(1)
beans.length;

// Finding words
// find the word 'horse'

// Novel
// read it till you find the word horse
// O(n)

// Encyclopediqa
// Open book then divide and conquour
// if early or later then check
// O(log N)

// Other terms:
// O(1): constant time
// O(N): linear time
// O(N^2): quadratic

// DETERMINING BIG-O

// Identify your code
// Identify N
// Count the steps in a typical run
// Keep the most significant part

const data = ["A", "B", "C"];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// O(n)
// Scale of algorithm scale LINEAR (1 to 1) with the size of input

const data = ["A", "B", "C"];
const data2 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

for (let j = 0; j < data2.length; j++) {
  console.log(data2[j]);
}

//O(n + a)

const data = ["A", "B", "C"];
const data2 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data2.length; j++) {
    console.log(data[i] + data2[j]);
  }
}

// O(n^2)
// Quadratic
