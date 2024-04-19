//class OOP
//Class Person {}
//OOP Искапсуляция, Наследование, Полиморфирзм

class Character {
    constructor(type) {
        this.type = type
    }
}
class Person extends Character {
    #name;
    constructor(name, age, type) {
        super(type)
        this.#name = name
        this.age = age
    }
    printUserm = () => {
        console.log("Pr user method");
        console.log(this.name);
    }
}
class Alina extends Person {
    constructor(name, age, type) {
        super(name, age, type)
        this.boyfrend = boyfrend
    }
    toSing() {
        console.log("I can to sing");
    }
}
const alina = new Alina("Tommt", "Alina", "22", "Спокойная")
const alex = new Person("Alex", 25, "Сложный")
const tom = new Person("Tom", 55, "Сложный")
alex.printUserm()//Alex
//alex.printUser
//tom.printUser

// alex.name = "JJJJ"
// console.log(alex, '----');




