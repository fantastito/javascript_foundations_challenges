const ShoppingBasket = require('./shoppingBasket')
const Candy = require('./candy')

describe(ShoppingBasket, () => {
    it('Gets the total price of the shopping basket', () => {
        let basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0)
    })
    it('Adds an item to the shopping basket', () => {
        let basket = new ShoppingBasket();
        let candy = new Candy('Mars', 4.99);
        basket.addItem(candy);
        expect(basket.items).toEqual([ { name: 'Mars', price: 4.99 }])
    })
    it('Adds two item to the shopping basket and gets the total price', () => {
        let basket = new ShoppingBasket();
        let candy1 = new Candy('Mars', 4);
        let candy2 = new Candy('Chocolate', 5);
        basket.addItem(candy1);
        basket.addItem(candy2);
        expect(basket.getTotalPrice()).toEqual(9)
    })
    it('Adds a mocked item to the shopping basket', () => {
        const doubleCandy = {
            name: 'doubledCandy',
            price: 7
        }
        const basket = new ShoppingBasket();
        basket.addItem(doubleCandy);
        expect(basket.items).toEqual([ { name: 'doubledCandy', price: 7 }])
    })
})