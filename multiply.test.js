const multiply = require('./multiply')

xdescribe(multiply, () => {
    it('multiplies 3 * 5', () => {
        expect(multiply(5,3)).toBe(15)
    })
})