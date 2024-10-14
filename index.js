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
