const number = 13;
const lastFactor = 10;

function formatRow(factor) {
  return `${number} x ${factor} = ${number * factor}`;
}

console.log('Таблиця множення (for)');
for (let factor = 1; factor <= lastFactor; factor++) {
  console.log(formatRow(factor));
}

console.log('\nТаблиця множення (while)');
let factor = 1;
while (factor <= lastFactor) {
  console.log(formatRow(factor));
  factor++;
}
