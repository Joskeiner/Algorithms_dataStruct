class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBuket = this.data[address];
    if (currentBuket) {
      for (let i = 0; i < currentBuket.length; i++) {
        if (currentBuket[i][0] === key) {
          return currentBuket[i][1];
        }
      }
    }
    return undefined;
  }
  delete(key) {
    const addrees = this.hashMethod(key);
    let deleteHash = this.data[addrees];
    let valueDelete = [];
    if (deleteHash) {
      for (let i = 0; i < deleteHash.length; i++) {
        if (deleteHash[i][0] === key) {
          valueDelete = deleteHash[i];
          //deleteHash = deleteHash.filter((item) => item[0] != valueDelete[0]);
          this.data[addrees] = deleteHash;
          return valueDelete;
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Adriana", 2000);

//console.log(myHashTable.data);
//console.log("\n");
//console.log(myHashTable.get("Mariana"));
console.log("\n");
console.log(myHashTable.delete("Diego"));
console.log("\n");
//console.log(myHashTable.data);
