const add = require ('./add')

describe('add', () => {
    it('adds 4 and 2', () => {
        expect(add(4,2)).toBe(6)
    })
    it('adds 0 and 5', () => {
        expect(add(0,5)).toBe(5)
    })
});