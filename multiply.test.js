const multiply = require('./multiply')

describe(multiply, () => {
    it('multiplies 3 * 5', () => {
        expect(multiply(5,3)).toBe(15)
    })
})