// The new keyword in JavaScript is used to create an instance of an object that has a specific constructor.

// 1.Creating Instances of Objects
// When you use the new keyword with a constructor function or a class, it creates a new object and sets up the prototype chain.
function Dog(name) {
    this.name = name;
    this.bark = function() {
        console.log(`${this.name} says Woof!`);
    };
}

const myDog = new Dog('Buddy');
myDog.bark(); // Output: Buddy says Woof!


//2.Setting the Prototype
//When you create an object with new, it links the new object to the prototype of the constructor function
function Cat(name) {
    this.name = name;
}

Cat.prototype.meow = function() {
    console.log(`${this.name} says Meow!`);
};

const myCat = new Cat('Whiskers');
myCat.meow(); // Output: Whiskers says Meow!


//3. using classes
class Bird {
    constructor(name) {
        this.name = name;
    }

    sing() {
        console.log(`${this.name} sings!`);
    }
}

const myBird = new Bird('Tweety');
myBird.sing(); // Output: Tweety sings!
