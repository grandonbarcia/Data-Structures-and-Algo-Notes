function Tree() {
  this.root = null;
}

function Node(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

Tree.prototype.addValue = function (value) {
  let node = new Node(value);
  if (this.root === null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
};

Tree.prototype.traverse = function () {
  this.root.visit();
};

Tree.prototype.search = function (value) {
  this.root.search(value);
};

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};

Node.prototype.visit = function () {
  if (this.left != null) {
    this.left.visit();
  }
  console.log(this.value);
  if (this.right != null) {
    this.right.visit();
  }
};

Node.prototype.search = function (value) {
  console.log("search");
  if (this.value == value) {
    console.log("found " + value);
  } else if (value < this.value) {
    this.left.search(value);
  } else if (value > this.value) {
    this.right.search(value);
  }
};

let tree;

tree = new Tree();
tree.addValue(5);

let findThisNum;
for (let i = 0; i < 10; i++) {
  let randomNum = Math.floor(Math.random() * 100 + 1);
  if (i == 5) findThisNum = randomNum;

  tree.addValue(randomNum);
}

console.dir(tree, { depth: null });

tree.traverse();
console.log("find this Num", findThisNum);
tree.search(findThisNum);
