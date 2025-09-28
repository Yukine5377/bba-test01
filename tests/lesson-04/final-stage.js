function findPairsDivisibleBy17() {
  let count = 0;

  for (let i = 1; i < 99; i++) {
    for (let j = i + 1; j <= 99; j++) {
      if ((i + j) % 17 === 0) {
        console.log(`(${i}, ${j}) = ${i + j}`);
        count++;
      }
    }
  }
  console.log(`Tổng cộng: ${count} cặp`);
}


findPairsDivisibleBy17();