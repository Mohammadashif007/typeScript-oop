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
    class LibraryItem {
        constructor(id, title) {
            this.id = id;
            this.title = title;
            this.isBorrowed = false;
        }
        borrow() {
            if (this.isBorrowed) {
                return `${this.title} is already borrowed`;
            }
            else {
                this.isBorrowed = true;
                return `${this.title} has been borrowed`;
            }
        }
    }
    const item = new LibraryItem(11, "Harry potter");
    console.log(item.borrow());
}
