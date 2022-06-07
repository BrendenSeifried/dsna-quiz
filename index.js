class Stack {
  data = [];
  constructor(stuff) {
    this.stuff = stuff;
  }
  addback = (item) => {
    this.data.push(item);
  };
  add2front(item2) {
    this.data.unshift(item2);
  }

  get readableList() {
    return this.data.toString();
  }
}
const stack = new Stack();
stack.addback("fox");
stack.addback("cappybara");
stack.addback("cats");
stack.addback("seal");
stack.add2front("dogs");

console.log(stack.readableList);

class Queue {
  array = [];
  constructor(item) {
    this.item = item;
  }
  enqueue = (item) => {
    this.array.push(item);
  };
  dequeue = () => {
    return this.array.shift();
  };
  hasNext = () => {
    if (this.array.length > 0) return true;
    else return false;
  };

  get readableList() {
    return this.array.toString();
  }
}

const queue = new Queue();
queue.enqueue("fox");
queue.enqueue("goose");
queue.enqueue("lizard");
console.log(queue.readableList);
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue("llama");
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue());

module.exports = { Queue };
