const factorial = require('./index.js');

//factorial 알고리즘 테스트
describe('factorial', () => {
    //첫 번째 테스트
    it('correctly computes factorial of a positive integer', () => {
        expect(factorial(3)).toEqual(6);
    });

    //두 번째 테스트
    it('throws an error if n is negative', () => {
        expect(() => {
            factorial(-1);
        }).toThrow();
    });

})




