// class Stack {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   data = () => {
//     console.log(`${this.name} has the ID of: ${this.id} `);
//   };
// }

// const stuff = new Stack(5, "example");
// console.log(stuff.data);
// stuff.data();

class Stack {
  data = [];

  //   constructor(test) {
  //     if (test) this.data = test;
  //     console.log(test);
  //   }
}
const answ = new Stack();
console.log(answ);
class Queue {}

module.exports = { Stack, Queue };
