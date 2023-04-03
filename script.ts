const list1 = [1, 8, 15, 16, 35];
const list2 = [2, 7, 12, 63];
const list3 = [10, 13, 14, 42];
const iterator = GetNext(list1, list2, list3);

/* Creating an array of iterators. */
function* GetNext(list1: number[], list2: number[], list3: number[]) {
  let seqNum = 1;
  let iterators = [list1[Symbol.iterator](), list2[Symbol.iterator](), list3[Symbol.iterator]()];

  /* Creating an infinite loop. */
  while (true) {
    const currentIterator = iterators[(seqNum - 1) % 3];
    const nextValue = currentIterator.next();

    /* This is checking if the iterator is done. If it is done, it will reset the iterator to the beginning
and increment the sequence number. */
    if (nextValue.done) {
      iterators[(seqNum - 1) % 3] = list3[Symbol.iterator]();
      seqNum++;
      continue;
    }

    /* Getting the value of the iterator. */
    const currentValue = nextValue.value;

    /* This is checking if the sequence number is even and the current value is even or if the sequence
number is odd and the current value is odd. If it is, it will continue to the next iteration. */
    if (
      (seqNum % 2 === 0 && currentValue % 2 === 0) ||
      (seqNum % 2 !== 0 && currentValue % 2 !== 0)
    ) {
      continue;
    }

    yield currentValue;
  }
}

/* This is printing the first 8 values of the iterator. */
for (let i = 0; i < 8; i++) {
  console.log(iterator.next().value);
}

console.log("Done");
console.log(iterator.next().value);
console.log(iterator.next().value);
