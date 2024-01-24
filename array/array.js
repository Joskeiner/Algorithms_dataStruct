//const array = ["diego", "kenia", "maria"];
class MyArry {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(item) {
    if (!item) {
      return this.length;
    }
    let arrayValue = Object.values(this.data);
    if (this.length != 0) {

      for (let i = 0; i < this.length; i++) {
        arrayValue[i + 1] = this.data[i];
      }

    }
    this.data = { ...arrayValue };
    this.data[0] = item;

    return this.length++;
  }
  shift() {
    if (this.length == 0) {
      this.length = 0;
      return this.data[0];
    }
    let valueDelte = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return valueDelte;

  }
}

const array = new MyArry();

array.push("pedro");
array.push("kenia");
array.push("joskeiner");
array.get("pedro");

array.pop();
array.push("antonio");
array.unshift("gregory");
console.log(array);
array.shift();
console.log(array);
