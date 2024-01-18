class ShoppingBasket {
    constructor() {
        this.items = []
    }
    getTotalPrice() {
        return this.items.reduce((sum, item) => sum + item.getPrice(), 0)
    }
    addItem(item) {
        this.items.push(item);
    }
}

module.exports = ShoppingBasket