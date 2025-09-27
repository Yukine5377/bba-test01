// ● Tạo file tests/lesson-04/cloud-kingdom.js
// ● Khai báo:
// ○ Biến powerUp có giá trị là “mushroom”.
// ○ Sử dụng câu điều kiện if...else để xác định tên hiệu ứng tương ứng với
// các powerUp:
// ■ mushroom: "Mario becomes Super!"
// ■ flower: "Mario can shoot fireballs!"
// ■ star: "Mario is invincible!"
// ■ none: "Mario is normal"

// 4 https://academy.betterbytesvn.com

// Better Bytes Academy
// Học Kĩ - Hiểu Bản Chất - Mentor Tận Tình

// ■ Khác: "Unknown power-up"
// ○ In ra ngoài console hiệu ứng tên hiệu ứng

// ● Commit kết quả với message: “feat: add solution for challenge 03”
// Push cả 2 nhánh vừa tạo trong stage này lên GitHub.
let powerUp = "mushroom"
let effect = ''
if (powerUp === "mushroom") {
    effect = "Mario becomes Super!"
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!"
} else if (powerUp === "star") {
    effect = "Mario is invincible!"
} else if (powerUp === "none") {
    effect = "Mario is normal"
} else effect = "Unknown power-up"

console.log (effect);