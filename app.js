// const LinkedList = require("./linkedLists");

// const ll = LinkedList.fromValues(10, 20, 30, 40);

// ll.print();
// ll.insertAtIndex(2, 60);
// ll.print();

// ll.removeHead();

// ll.print();

var v = 1;

var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  f1();
};

f2();
