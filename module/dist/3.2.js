"use strict";
{
    // OOp - inheritance
    // class Animal {
    //     move(){
    //         console.log("Animal is moving");
    //     }
    // }
    // class Dog extends Animal {
    //     barking(){
    //         console.log("Dog is barking");
    //     }
    // }
    // const myAnimal = new Dog();
    // myAnimal.move();
    // myAnimal.barking();
    // Example 1: 
    // class Shape {
    //     color: string;
    //     constructor(color: string){
    //         this.color=color
    //     }
    //     area(): number{
    //         return 12
    //     }
    // }
    // const calculateArea = new Shape("Yellow");
    // console.log(calculateArea.area());
    // Example 2
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} sleep ${numberOfHours} hours`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student = new Student("hablu", 33, "cTg");
    const teacher = new Teacher("TAblu", 60, "NRI");
    student.getSleep(30);
    teacher.getSleep(55);
}
