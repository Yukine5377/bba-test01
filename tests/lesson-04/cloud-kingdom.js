// Biến playerName có giá trị là “Mario”.
// ○ Biến currentLives có giá trị là 3.
// ○ Các hằng số lưu coins theo level:
// ■ Level 1: 25;
// ■ Level 2: 30;
// ■ Level 3: 45;
// ○ Tính giá trị trung bình coin của 3 level và in ra console.
// ○ In ra số coin dư khi chia cho 3
// ● Commit kết quả với message: “feat: add solution for challenge 03”
const playerName = "Mario"
const currentLives = 3
const coinByLevel1 = 25
const coinByLevel2 = 30
const coinByLevel3 = 45

const avgCoin = (coinByLevel1 + coinByLevel2 + coinByLevel3) / 3;
console.log(avgCoin);

const oddCoin = (coinByLevel1 + coinByLevel2 + coinByLevel3) % 3
console.log(oddCoin)
