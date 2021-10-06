console.log('hello world');


/* Stacks! */


// functions: push, pop, peek, length

let letters = [];

let word = 'racecar'

// put ltters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + ' is a palindrome.')
}
else {
    console.log(word + ' is not a palindrome.')
}



var Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
    }
}



