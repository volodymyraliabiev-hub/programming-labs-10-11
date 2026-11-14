const car1 = { brand: "Toyota", model: "Yaris", year: 2018 };
const car2 = { brand: "Skoda", model: "Fabia", owner: 2021 };

const car3 = { ...car1, ...car2 };
console.log(JSON.stringify(car3, null, 2));
