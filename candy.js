class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() { 
        return this.name;
    }
    getPrice() { 
        return this.price;
    }
}

module.exports = Candy;

// candy = new Candy('Mars', 4.99);
// console.log(candy.name);
// console.log(candy.getName());