const player = { name: "Мандрівник", hp: 100, attack: 20 };
const monster = { name: "Монстр", hp: 80, attack: 15 };
const inventory = ["меч", "щит", "зілля"];

function attack() {
  const damage = Math.min(player.attack, monster.hp);
  monster.hp -= damage;
  console.log(`Удар гравця: ${damage} шкоди.`);
}
function monsterAttack() {
  const damage = Math.min(monster.attack, player.hp);
  player.hp -= damage;
  console.log(`Відповідь монстра: ${damage} шкоди.`);
}
function showStatus() {
  console.log(`Гравець ${player.hp} HP | Монстр ${monster.hp} HP`);
}
console.log("Битва з монстром");
console.log(`Герой: ${player.name}`);
console.log(`Інвентар: ${inventory.join(", ")}`);
showStatus();
let round = 1;
while (player.hp > 0 && monster.hp > 0) {
  console.log(`Раунд ${round++}`);
  attack();
  if (monster.hp > 0) monsterAttack();
  showStatus();
}
console.log(player.hp > 0 ? "Гравець переміг!" : "Монстр переміг!");
