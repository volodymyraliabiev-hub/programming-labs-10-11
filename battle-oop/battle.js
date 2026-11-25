class Character {
  #hp;
  constructor(name, hp, power) {
    this.name = name; this.#hp = hp; this.power = power;
  }
  attack(target) {
    if (!this.isAlive() || !target.isAlive()) return 0;
    const damage = target.takeDamage(this.power);
    console.log(`${this.name}: ${damage} шкоди.`);
    return damage;
  }
  takeDamage(value) {
    const damage = Math.min(this.#hp, Math.max(0, value));
    this.#hp -= damage;
    return damage;
  }
  showStatus() {
    console.log(`${this.name}: ${this.#hp} HP`);
  }
  isAlive() { return this.#hp > 0; }
}
class Player extends Character {
  constructor() {
    super("Мандрівник", 100, 20);
    this.inventory = ["меч", "щит", "зілля здоров'я"];
  }
}
class Monster extends Character {
  constructor() { super("Монстр", 80, 15); }
}
const player = new Player(), monster = new Monster();
console.log("Битва з монстром: ООП");
console.log(`Інвентар: ${player.inventory.join(", ")}`);
player.showStatus(); monster.showStatus();
let round = 1;
while (player.isAlive() && monster.isAlive()) {
  console.log(`Раунд ${round++}`);
  player.attack(monster);
  if (monster.isAlive()) monster.attack(player);
  player.showStatus(); monster.showStatus();
}
console.log(player.isAlive() ? "Гравець переміг!" : "Гравець програв.");
