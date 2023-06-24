const calc = require('../index.js');

describe('Operaciones aritmeticas', () => {
    test('Suma de 1 + 2 = 3', () => {
        let result = calc.sum(1, 2);
        expect(result).toBe(3);
    });
    test('Resta de 1 - 2 = -1', () => {
        let result = calc.diff(1, 2);
        expect(result).toBe(-1);
    });

});