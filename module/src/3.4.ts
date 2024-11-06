{
//instanceof

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }


    makeSound(){
        console.log("I am making sound ");
    }
}

class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeBark(){
        console.log("I am barking");
    }
}

class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species)
    }
    makeMeiw(){
        console.log("Make sound meaw");
    }
}

const dogSound = new Dog("John", "Dog");
dogSound.makeBark()

const catSound = new Cat("Roy", "Cat");
catSound.makeMeiw();

const noSound = new Animal("no", "animal")
noSound.makeSound()


const animal = (animal: Animal) => {
    if(animal instanceof Dog){
        animal.makeBark()
    }
    else if(animal instanceof Cat){
        animal.makeMeiw()
    }
}


}