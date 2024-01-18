const Candy = require('./candy')

xdescribe(Candy, () => {
    it('Gets the name of a candy', () => {
        let candy = new Candy('Mars', 4.99);
        expect(candy.getName()).toEqual('Mars');
    });
    it('Gets the price of a candy', () => {
        let candy = new Candy('Mars', 4.99);
        expect(candy.getPrice()).toEqual(4.99);
    })
})