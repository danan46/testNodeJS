const { add } = require('../index');

describe('The ADD function tests', () => {
    it('Should be passed 11 for input 5 and 6', () => {
        const test = add(5,6);
        const expected = 11;
        expect(test).toBe(expected);
    });

    it('Should throw an error if arguments are not passed in', () => {
        expect(add).toThrow();
    });
});

