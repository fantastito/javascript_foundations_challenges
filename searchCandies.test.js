const searchCandies = require('./searchCandies')

xdescribe(searchCandies, () => {
    it('Searches for Ma and 10', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    })
    it('Searches for Ma and 2', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
    })
    it('Searches for S and 10', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    })
    it('Searches for S and 4', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
    })
    it('Searches for s and 4', () => {
        expect(searchCandies('s', 4)).toEqual([ 'Skitties', 'Skittles' ])
    })
})