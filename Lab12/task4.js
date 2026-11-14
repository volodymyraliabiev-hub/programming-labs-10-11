const person = {
    firstName: "Леся",
    lastName: "Мельник",
    age: 17,
};

person.email = "lesia@example.com";
delete person.age;

console.log(JSON.stringify(person, null, 2));
