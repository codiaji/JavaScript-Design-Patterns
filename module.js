class Person{
    static #singletonPerson={};
    constructor(name,age){
        Person.#makePerson(name,age);
        return Person.#singletonPerson;
    }

    static #makePerson(name,age){
        Person.#singletonPerson.name=name;
        Person.#singletonPerson.age=age;
        return Person.#singletonPerson;
    }
}
module.exports=Person;