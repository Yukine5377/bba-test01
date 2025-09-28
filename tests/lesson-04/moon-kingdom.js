// Tạo hàm createCharacters:
// ● Khai báo mảng các object: characters có các thuộc tính: name, level, health.
// ● Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
// ○ thuộc tính name: UPPERCASE của name gốc
// ○ level: x2 của level gốc
// ○ health: x3 của health gốc
// ● Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
// mảng mới lọc được này là “possibleWinners”
function createCharacters() {
  let characters = [
    {
      name: "mario",
      level: 1,
      health: 10000,
    },
  ];

  function change(character) {
    return {
      name: character.name.toUpperCase(),
      level: character.level * 2,
      health: character.health * 3,
    };
  }

  const charactersPowerUp = characters.map(change);

  const possibleWinners = characters.filter(function calculate(x) {
    return x.health > 1000;
  });
}
createCharacters();
// 2: Tạo hàm printLeaderboard:
// ● Nhận vào tham số: players là mảng các object: [{name: "Mario", score:
// 1000}, ...]
// ● Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
// ● In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía
// trước

function printLeaderboard(players) {
  players.sort(function (a, b) {
    return b.score - a.score;
  });

  const medals = {
    0: "🥇",
    1: "🥈",
    2: "🥉", 
  };

  function awardTitle(player, index) {
    console.log(
      `${medals[index] || "  "} ${index + 1}. ${player.name} - ${
        player.score
      } ${player.score > 1 ? "pts" : "pt"}`
    );
  }

  players.forEach(awardTitle);
}

printLeaderboard([
  {
    name: "Mario",
    score: 1000,
  },
  {
    name: "Phuong",
    score: 32,
  },
  {
    name: "Tuyet",
    score: 10000,
  },
  {
    name: "Liem",
    score: 100,
  },
]);
