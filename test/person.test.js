const searchEmail = require('../person.js');

const persons = [
    { name : "John", age : 17, email: "john@example.com" },
    { name : "Mariela", age : 29, email: "Mariela.com" },
    { name : "Karla", age : 30, email: "Karla@example.com" },
];

describe('Search email', () => {
    test('Email Exists', () => {
        const emailExists = searchEmail(persons, "Karla@example.com");
        expect(emailExists).not.toBeNull();
    });
    test('Email No Exists', () => {
        const emailExists = searchEmail(persons, "Carla@example.com");
        expect(emailExists).toBeNull();
    });
    test('Email is not Valid', () => {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        expect(searchEmail( persons, "Mariela.com").email).not.toMatch(emailRegex);
    });


});