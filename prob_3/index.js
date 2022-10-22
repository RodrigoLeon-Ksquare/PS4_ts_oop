"use strict";
class Pizza {
    constructor(size, cheese, pepperoni, ham, pineapple) {
        this._size = size;
        this._cheese = cheese;
        this._pepperoni = pepperoni;
        this._ham = ham;
        this._pineapple = pineapple;
    }
    get size() {
        return this._size;
    }
    set size(newSize) {
        this._size = newSize;
    }
    get cheese() {
        return this._cheese;
    }
    set cheese(newCheese) {
        this._cheese = newCheese;
    }
    get pepperoni() {
        return this._pepperoni;
    }
    set pepperoni(newPepperoni) {
        this._pepperoni = newPepperoni;
    }
    get ham() {
        return this._ham;
    }
    set ham(newHam) {
        this._ham = newHam;
    }
    get pineapple() {
        return this._pineapple;
    }
    set pineapple(newPineapple) {
        this._pineapple = newPineapple;
    }
}
class SmallPizza extends Pizza {
    genCost() {
        const numToppings = this._pepperoni + this._ham + this._pineapple;
        const sizePrice = 10;
        const toppingsPrice = 2 * numToppings;
        const extraCheesePrice = 2;
        let total = 0;
        if (this._size !== "small")
            return "Error the size that you set don´t match with the class";
        if (this._cheese) {
            total = sizePrice + toppingsPrice + extraCheesePrice;
        }
        else {
            total = sizePrice + toppingsPrice;
        }
        return ` The total price for your ${this._size} pizza is ${total} USD`;
    }
}
class MediumPizza extends Pizza {
    genCost() {
        const numToppings = this._pepperoni + this._ham + this._pineapple;
        const sizePrice = 12;
        const toppingsPrice = 2 * numToppings;
        const extraCheesePrice = 4;
        let total = 0;
        if (this._size !== "medium")
            return "Error the size that you set don´t match with the class";
        if (this._cheese) {
            total = sizePrice + toppingsPrice + extraCheesePrice;
        }
        else {
            total = sizePrice + toppingsPrice;
        }
        return ` The total price for your ${this._size} pizza is ${total} USD`;
    }
}
class LargePizza extends Pizza {
    genCost() {
        const numToppings = this._pepperoni + this._ham + this._pineapple;
        const sizePrice = 14;
        const toppingsPrice = 3 * numToppings;
        const extraCheesePrice = 6;
        let total = 0;
        if (this._size !== "large")
            return "Error the size that you set don´t match with the class";
        if (this._cheese) {
            total = sizePrice + toppingsPrice + extraCheesePrice;
        }
        else {
            total = sizePrice + toppingsPrice;
        }
        return ` The total price for your ${this._size} pizza is ${total} USD`;
    }
}
class XLPizza extends Pizza {
    genCost() {
        const numToppings = this._pepperoni + this._ham + this._pineapple;
        const sizePrice = 18;
        const toppingsPrice = 4 * numToppings;
        const extraCheesePrice = 6;
        let total = 0;
        if (this._size !== "XL")
            return "Error the size that you set don´t match with the class";
        if (this._cheese) {
            total = sizePrice + toppingsPrice + extraCheesePrice;
        }
        else {
            total = sizePrice + toppingsPrice;
        }
        return ` The total price for your ${this._size} pizza is ${total} USD`;
    }
}
const small1 = new SmallPizza("small", false, 1, 1, 1);
console.log(small1);
console.log(small1.genCost());
const medium1 = new MediumPizza("medium", false, 1, 1, 1);
console.log(medium1.genCost());
const large1 = new LargePizza("large", false, 1, 1, 1);
console.log(large1.genCost());
const xl1 = new XLPizza("XL", false, 1, 1, 1);
console.log(xl1.genCost());
