function isPrime(n) {
  if (n < 2) return false;

  for (let i = n - 1; i > 1; --i) {
    if (!(n % i)) {
      return false;
    }
  }

  return true;
}

function nextPrime(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Invalid input");
  }

  if (isPrime(n)) return n;

  return nextPrime(n + 1);
}

class HashTable {
  constructor(initialCapacity = 5, maxLoadFactor = 1.0) {
    const cap = nextPrime(initialCapacity);
    this.bucket = new Array(cap).fill(0).map(() => []);
    this.capacity = cap;
    this.size = 0;
    this.maxLoadFactor = maxLoadFactor;
  }

  _hash(key) {
    const multiplier = 31;

    let hash = 0;

    for (let i = 0; i < key.length; ++i) {
      hash = hash * multiplier + key[i].charCodeAt();
    }

    return hash % this.capacity;
  }

  loadFactor() {
    return this.size / this.capacity;
  }

  has(key) {
    const index = this._hash(key);
    const foundBucket = this.bucket[index];

    for (const item of foundBucket) {
      if (item[0] === key) {
        return true;
      }
    }

    return false;
  }

  get(key) {
    const index = this._hash(key);
    const foundBucket = this.bucket[index];

    for (const [k, v] of foundBucket) {
      if (k === key) {
        return v;
      }
    }
  }

  set(key, value) {
    const index = this._hash(key);

    for (const item of this.bucket[index]) {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    }

    this.bucket[index].push([key, value]);
    ++this.size;

    if (this.loadFactor() >= this.maxLoadFactor) {
      this.resize();
    }
  }

  getSize() {
    return this.size;
  }

  delete(key) {
    const index = this._hash(key);

    for (let i = 0; i < this.bucket[index].length; ++i) {
      if (this.bucket[index][i][0] === key) {
        this.bucket[index].splice(i, 1);
        --this.size;
        break;
      }
    }
  }

  *keys() {
    for (let i = 0; i < this.bucket.length; ++i) {
      for (let j = 0; j < this.bucket[i].length; ++j) {
        yield this.bucket[i][j][0];
      }
    }
  }

  *values() {
    for (let i = 0; i < this.bucket.length; ++i) {
      for (let j = 0; j < this.bucket[i].length; ++j) {
        yield this.bucket[i][j][1];
      }
    }
  }

  *entries() {
    for (let i = 0; i < this.bucket.length; ++i) {
      for (let j = 0; j < this.bucket[i].length; ++j) {
        yield [this.bucket[i][j][0], this.bucket[i][j][1]];
      }
    }
  }

  resize() {
    const oldBucket = this.bucket;
    this.capacity = nextPrime(this.capacity * 2);
    this.bucket = new Array(this.capacity).fill(0).map(() => []);
    this.size = 0;

    for (let i = 0; i < oldBucket.length; ++i) {
      for (let j = 0; j < oldBucket[i].length; ++j) {
        this.set(oldBucket[i][j][0], oldBucket[i][j][1]);
      }
    }
  }

  clear() {
    for (let i = 0; i < this.bucket.length; ++i) {
      this.bucket[i] = [];
    }

    this.size = 0;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.bucket.length; ++i) {
      for (let j = 0; j < this.bucket[i].length; ++j) {
        yield [this.bucket[i][j][0], this.bucket[i][j][1]];
      }
    }
  }
}