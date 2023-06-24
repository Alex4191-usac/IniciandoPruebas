/* const calculadora = require('./index.js');

console.log(calculadora.sum(1, 2));
console.log(calculadora.diff(1, 2));
console.log(calculadora.product(1, 2));

 */

const searchEmail = require('./person.js');

const persons = [
    { name : "John", age : 17, email: "john@example.com" },
    { name : "Mariela", age : 29, email: "Mariela.com" },
    { name : "Karla", age : 30, email: "Karla@example.com" },
];

console.log(searchEmail(persons, "john@example.com"));