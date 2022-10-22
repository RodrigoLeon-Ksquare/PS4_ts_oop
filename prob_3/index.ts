//Create a new type size for the size of the pizza
type size = "small" | "medium" | "large" | "XL";

//Create an abstract class that will use for inheritance
abstract class Pizza {
  protected _size: size;
  protected _cheese: boolean;
  protected _pepperoni: number;
  protected _ham: number;
  protected _pineapple: number;

  constructor(
    size: size,
    cheese: boolean,
    pepperoni: number,
    ham: number,
    pineapple: number
  ) {
    this._size = size;
    this._cheese = cheese;
    this._pepperoni = pepperoni;
    this._ham = ham;
    this._pineapple = pineapple;
  }

  //Created setters and getters for each property
  protected get size() {
    return this._size;
  }
  protected set size(newSize) {
    this._size = newSize;
  }

  protected get cheese() {
    return this._cheese;
  }
  protected set cheese(newCheese) {
    this._cheese = newCheese;
  }

  protected get pepperoni() {
    return this._pepperoni;
  }
  protected set pepperoni(newPepperoni) {
    this._pepperoni = newPepperoni;
  }

  protected get ham() {
    return this._ham;
  }
  protected set ham(newHam) {
    this._ham = newHam;
  }

  protected get pineapple() {
    return this._pineapple;
  }
  protected set pineapple(newPineapple) {
    this._pineapple = newPineapple;
  }
  //Abstract method genCost that will use for overwrite in the children class
  abstract genCost(): string;
}

//Class for the small pizza size that inheritance property for father class Pizza and overwrite genCost method
class SmallPizza extends Pizza {
  genCost(): string {
    //Variables that will use for calculate the total price
    const numToppings: number = this._pepperoni + this._ham + this._pineapple;
    const sizePrice: number = 10;
    const toppingsPrice: number = 2 * numToppings;
    const extraCheesePrice = 2;
    let total: number = 0;
    //If the size dont match with the class, sent an error
    if (this._size !== "small")
      return "Error the size that you set don´t match with the class";
    //If the person wants extra cheese, add that cost to the total price
    if (this._cheese) {
      total = sizePrice + toppingsPrice + extraCheesePrice;
      //if not, calculate the total price only with the size and toppings cost
    } else {
      total = sizePrice + toppingsPrice;
    }
    //return the total as a string
    return ` The total price for your ${this._size} pizza is ${total} USD`;
  }
}

//Class for the medium pizza size that inheritance property for father class Pizza and overwrite genCost method
class MediumPizza extends Pizza {
  genCost(): string {
    //Variables that will use for calculate the total price
    const numToppings: number = this._pepperoni + this._ham + this._pineapple;
    const sizePrice: number = 12;
    const toppingsPrice: number = 2 * numToppings;
    const extraCheesePrice = 4;
    let total: number = 0;
    //If the size dont match with the class, sent an error
    if (this._size !== "medium")
      return "Error the size that you set don´t match with the class";
    //If the person wants extra cheese, add that cost to the total price
    if (this._cheese) {
      total = sizePrice + toppingsPrice + extraCheesePrice;
      //if not, calculate the total price only with the size and toppings cost
    } else {
      total = sizePrice + toppingsPrice;
    }
    //return the total as a string
    return ` The total price for your ${this._size} pizza is ${total} USD`;
  }
}

//Class for the large pizza size that inheritance property for father class Pizza and overwrite genCost method
class LargePizza extends Pizza {
  genCost(): string {
    //Variables that will use for calculate the total price
    const numToppings: number = this._pepperoni + this._ham + this._pineapple;
    const sizePrice: number = 14;
    const toppingsPrice: number = 3 * numToppings;
    const extraCheesePrice = 6;
    let total: number = 0;
    //If the size dont match with the class, sent an error
    if (this._size !== "large")
      return "Error the size that you set don´t match with the class";
    //If the person wants extra cheese, add that cost to the total price
    if (this._cheese) {
      total = sizePrice + toppingsPrice + extraCheesePrice;
      //if not, calculate the total price only with the size and toppings cost
    } else {
      total = sizePrice + toppingsPrice;
    }
    //return the total as a string
    return ` The total price for your ${this._size} pizza is ${total} USD`;
  }
}

//Class for the XLl pizza size that inheritance property for father class Pizza and overwrite genCost method
class XLPizza extends Pizza {
  genCost(): string {
    const numToppings: number = this._pepperoni + this._ham + this._pineapple;
    const sizePrice: number = 18;
    const toppingsPrice: number = 4 * numToppings;
    const extraCheesePrice = 6;
    let total: number = 0;
    //If the size dont match with the class, sent an error
    if (this._size !== "XL")
      return "Error the size that you set don´t match with the class";
    //If the person wants extra cheese, add that cost to the total price
    if (this._cheese) {
      total = sizePrice + toppingsPrice + extraCheesePrice;
      //if not, calculate the total price only with the size and toppings cost
    } else {
      total = sizePrice + toppingsPrice;
    }
    //return the total as a string
    return ` The total price for your ${this._size} pizza is ${total} USD`;
  }
}

//Example cases
const small1 = new SmallPizza("small", false, 1, 1, 1);
console.log(small1);
console.log(small1.genCost());

const medium1 = new MediumPizza("medium", false, 1, 1, 1);
console.log(medium1.genCost());

const large1 = new LargePizza("large", false, 1, 1, 1);
console.log(large1.genCost());

const xl1 = new XLPizza("XL", false, 1, 1, 1);
console.log(xl1.genCost());
