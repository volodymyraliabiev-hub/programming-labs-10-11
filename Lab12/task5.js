const users = [
    { name: "Остап", email: "ostap@example.com", age: 16 },
    { name: "Марта", email: "marta@example.com", age: 17 },
];

for (const { name, email, age } of users) {
    console.log(`${name} (${age} р.)`);
    console.log(email);
}
