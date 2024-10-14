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


// Returning the Object
// When using new, the constructor function implicitly returns the newly created object unless it returns a different object explicitly.

// 5. Error Handling
// If you forget to use new when calling a constructor, this will refer to the global object (or undefined in strict mode), which can lead to unexpected behavior or errors.

// Conclusion
// The new keyword is essential for creating instances of objects, establishing prototypes, and leveraging object-oriented programming in JavaScript. If you have more specific questions about its use or need examples, feel free to ask!



