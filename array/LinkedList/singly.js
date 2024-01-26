// Linked List son simplemente un conjunto de nodos ordenados que contienen los valores
// que necesitamos (numbers , string , bool) . cada uni tiene un valor y una referencia a un
// siguiente nodo
class MyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new MyNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  Prepend(value) {
    const newNode = new MyNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  Insert(node, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // metodo Remove
}

let myLinkedList = MySinglyLinkedList(1);
