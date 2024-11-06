"use strict";
{
    // OOP, Class
    // class Car {
    //     model: string;
    //     year: number;
    //     constructor(model: string, year: number) {
    //         this.model = model;
    //         this.year = year;
    //     }
    // }
    // const myCar = new Car("Toyota", 3030);
    // console.log(myCar);
    // class LibraryItem {
    //     private id: number;
    //     private title: string;
    //     private isBorrowed: boolean;
    //     constructor(id: number, title: string) {
    //         this.id = id;
    //         this.title = title;
    //         this.isBorrowed = false;
    //     }
    //     borrow(): string {
    //         if (this.isBorrowed) {
    //             return `${this.title} is already borrowed`;
    //         } else {
    //             this.isBorrowed = true;
    //             return `${this.title} has been borrowed`;
    //         }
    //     }
    // }
    // const item = new LibraryItem(11, "Harry potter");
    // console.log(item.borrow());
    class Animal {
        // ! parameter properties
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`This ${this.name} is species of ${this.species} and make ${this.sound} sound.`);
        }
    }
    const myAnimal = new Animal("Lion", "penthera Lio", "Roar");
    myAnimal.makeSound();
}
