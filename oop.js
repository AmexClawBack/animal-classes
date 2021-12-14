    // Create an Animal class that will have name, color, age, and legs properties.
    // Create different methods for Animal class.


// Encapsulation - allows us to keep things inside where theyre supposed to be

// This is encapsulation
// Superclass = parent
class Animal {
    // creating our properties for our class
    constructor(name, color, age, legs) {
        this.name = name
        this.color = color
        this.age = age 
        this.legs = legs
    }

    // Method
    genericSound() {
        console.log('This is a generic animal sound! WOOO')
        
        //This will point at the current object we are working with
        // console.log('We are inside genericSound', this)
    }
}

// Initiated Animal class using new keyword
// const dog = new Animal('Spot', 'brown', 2, 4)
// console.log(dog)

// // this doesnt belong anywhere
// dog.genericSound()

// const cat = new Animal('Meow', 'blue', 2, 4)
// cat.genericSound()


// INHERITANCE
// The way we inherit from our parent is by extending
// We use the extends keyword to inherit from our parent Class

// Inheritance
// Subclass = child
class Dog extends Animal {
    constructor(name, color, age, legs, owner) {
        // super refers to the parent of the child class
        // in this example we are extending from Animal 
        //which makes Animal the parent

        // if we do the constructor/super way, we need to pass the values we want from the parent inside our super()
        super(name, color, age, legs)
        this.owner = owner
    }

    playFetch() {
        console.log('Playing fetch with owner')
    }

    // re-write our method
// method overriding
//Polymorphism - we can change the statements inside our method that is name exactly the same from the parent.
    genericSound() {
    console.log('woof! woof!')
    super.genericSound()
    this.playFetch()
    
}
}

const spot = new Dog('Spot', 'purple', 99, 4, 'Liv')
// console.log(spot)

spot.genericSound()
// spot.playFetch()