const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .filter((_, i) => i !== 0)
  .map((v) => v.split(' ').map(Number));

input.sort((a, b) => {
  return a[0] - b[0];
});

class HeapQ {
  constructor() {
    this.store = [];
  }

  push(val) {
    this.store.push(val);
    if (!this.store.length) {
      return;
    }

    let idx = this.store.length - 1;
    let parentIdx = this.getParentIdx(idx);

    while (this.store[idx] < this.store[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(parentIdx);
    }
  }

  poll() {
    if (this.store.length === 1) {
      return this.store.pop();
    }
    const item = this.store[0];

    this.store[0] = this.store.pop();
    let idx = 0;
    while (this.getLeftIdx(idx) <= this.store.length - 1) {
      let targetIdx =
        this.store[this.getLeftIdx(idx)] > this.store[this.getRightIdx(idx)]
          ? this.getRightIdx(idx)
          : this.getLeftIdx(idx);

      if (this.store[idx] > this.store[targetIdx]) {
        this.swap(idx, targetIdx);
        idx = targetIdx;
      } else {
        break;
      }
    }
    return item;
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getRightIdx(idx) {
    return idx * 2 + 2;
  }

  getLeftIdx(idx) {
    return idx * 2 + 1;
  }

  swap(a, b) {
    const tmp = this.store[a];
    this.store[a] = this.store[b];
    this.store[b] = tmp;
  }

  getLength() {
    return this.store.length;
  }

  peek() {
    return this.store[0];
  }

  sum() {
    return this.store.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }
}

const pq = new HeapQ();

input.forEach(([dl, noodle]) => {
  if (pq.getLength() < dl) {
    pq.push(noodle);
  } else {
    if (pq.peek() < noodle) {
      pq.poll();
      pq.push(noodle);
    }
  }
});

console.log(pq.sum());
