const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
    ];

const searchCandies = (string, price) => {
    return candies
        .filter((candy) => candy.price < price && candy.name.slice(0,string.length) == string.charAt(0).toUpperCase() + string.slice(1))
        .map((candy) => candy.name);
}

module.exports = searchCandies

// console.log(searchCandies("G", 5))
// console.log(candies[0].name.slice(0,2))