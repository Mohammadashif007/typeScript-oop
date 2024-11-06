"use strict";
{
    //instanceof
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound ");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeiw() {
            console.log("Make sound meaw");
        }
    }
    const dogSound = new Dog("John", "Dog");
    dogSound.makeBark();
    const catSound = new Cat("Roy", "Cat");
    catSound.makeMeiw();
    const noSound = new Animal("no", "animal");
    noSound.makeSound();
    const animal = (animal) => {
        if (animal instanceof Dog) {
            animal.makeBark();
        }
        else if (animal instanceof Cat) {
            animal.makeMeiw();
        }
    };
}
