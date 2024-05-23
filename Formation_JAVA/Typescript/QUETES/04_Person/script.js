var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "I am ".concat(this.name);
    };
    Person.prototype.tellMyAge = function () {
        return "I am ".concat(this.age, " years old");
    };
    return Person;
}());
// Instanciation de deux personnes
var person1 = new Person("John", 40);
var person2 = new Person("Mary", 35);
// Mise à jour du contenu des éléments HTML
document.getElementById('person1Name').innerText = person1.tellMyName();
document.getElementById('person1Age').innerText = person1.tellMyAge();
document.getElementById('person2Name').innerText = person2.tellMyName();
document.getElementById('person2Age').innerText = person2.tellMyAge();
