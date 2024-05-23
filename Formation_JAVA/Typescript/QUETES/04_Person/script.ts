class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): string {
        return `I am ${this.name}`;
    }

    tellMyAge(): string {
        return `I am ${this.age} years old`;
    }
}

// Instanciation de deux personnes
const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);

// Mise à jour du contenu des éléments HTML
document.getElementById('person1Name')!.innerText = person1.tellMyName();
document.getElementById('person1Age')!.innerText = person1.tellMyAge();

document.getElementById('person2Name')!.innerText = person2.tellMyName();
document.getElementById('person2Age')!.innerText = person2.tellMyAge();
