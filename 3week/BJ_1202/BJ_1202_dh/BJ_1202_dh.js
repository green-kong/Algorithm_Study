const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [jewels, bags] = input.shift().split(' ');

const jewArr = input
  .slice(0, jewels)
  .map((v) => v.split(' ').map((v) => Number(v)));

let bagArr = input.slice(jewels, jewels + bags).map(Number);

jewArr.sort((a, b) => a[0] - b[0]);
bagArr.sort((a, b) => a - b);

class HeapQ {
  constructor() {
    this.store = [];
  }

  addNode(value) {
    this.store.push(value);

    let idx = this.store.length - 1;
    let parentIdx = this.getParentIdx(idx);

    while (parentIdx >= 0 && this.store[idx] > this.store[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(parentIdx);
    }
  }

  remove() {
    if (this.store.length <= 1) {
      return this.store.pop();
    }
    const rmItem = this.store[0];
    this.store[0] = this.store.pop();

    let idx = 0;

    while (idx < this.store.length - 1) {
      let leftIdx = this.getLeftIdx(idx);
      let rightIdx = this.getRightIdx(idx);

      if (leftIdx > this.store.length - 1) {
        break;
      }

      let targetIdx = leftIdx;
      if (this.store[targetIdx] && this.store[rightIdx]) {
        targetIdx =
          this.store[leftIdx] > this.store[rightIdx] ? leftIdx : rightIdx;
      }

      if (this.store[idx] > this.store[targetIdx]) {
        break;
      }

      this.swap(idx, targetIdx);
      idx = targetIdx;
    }

    return rmItem;
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftIdx(idx) {
    return 2 * idx + 1;
  }

  getRightIdx(idx) {
    return 2 * idx + 2;
  }

  swap(idxA, idxB) {
    const tmp = this.store[idxA];
    this.store[idxA] = this.store[idxB];
    this.store[idxB] = tmp;
  }
}

const pq = new HeapQ();

let jewIdx = 0;
let totalValue = 0;

for (let i = 0; i < bags; i++) {
  for (let j = jewIdx; j < jewels; j++) {
    if (bagArr[i] < jewArr[j][0]) {
      break;
    }
    pq.addNode(jewArr[j][1]);
    jewIdx = j + 1;
  }
  if (pq.store.length > 0) {
    totalValue += pq.remove();
  }
}

// class PriorityQ {
//   constructor() {
//     this.store = [];
//   }

//   enQ(jem) {
//     this.store.push(jem);
//   }

//   deQ() {
//     let delIdx = 0;
//     this.store.forEach((v, i) => {
//       delIdx = this.store[delIdx][1] < this.store[i][1] ? i : delIdx;
//     });
//     return this.store.splice(delIdx, 1);
//   }
// }

// const pq = new PriorityQ();

// jewArr.forEach((v) => {
//   pq.enQ.bind(pq)(v);
// });

// let totalValue = 0;

// for (let i = 0; i < jewArr.length; i++) {
//   const [value] = pq.deQ();

//   for (let j = 0; j < bagArr.length; j++) {
//     if (bagArr[j] >= value[0]) {
//       bagArr.splice(j, 1);
//       totalValue += value[1];
//       break;
//     }
//   }
// }

// console.log(totalValue);

// for (let i = 0; i < jewArr.length; i++) {
//   for (let j = 0; j < bagArr.length; j++) {
//     if (bagArr[j] >= jewArr[i][0]) {
//       bagArr[j] = 0;
//     }
//     totalValue += jewArr[i][1];
//     bagArr.sort((a, b) => b - a);
//     break;
//   }
// }
