class Stack {
  data = [];
  constructor(stuff) {
    this.stuff = stuff;
  }
  addback = (item) => {
    this.data.push(item);
  };

  get readableList() {
    return this.data.toString();
  }
}
const stack = new Stack([1, 2, 3]);
stack.addback("fox");
stack.addback("cappybara");
stack.addback("cats");
stack.addback("seal");

console.log(stack.readableList);

class Queue {}

module.exports = { Stack, Queue };
