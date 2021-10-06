let newList = [1, 2, 3];
let num = newList;
num[0] = 12;
console.log(num);
console.log(newList);

//Arrays support 3 types of operations

//INSERT

//LINEAR RUN TIME

let arrayList = [4, 5, 6, 7, 8];

arrayList.unshift(3);

console.log(arrayList); // [3, 4, 5, 6, 7, 8]

//DELETE

//LINEAR RUN TIME

arrayList.pop();

console.log(arrayList); // [3, 4, 5, 6, 7]
