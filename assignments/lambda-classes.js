// CODE here for your Lambda Classes
class Person{
    constructor(bio){
        this.name = bio.name;
        this.age = bio.age;
        this.location = bio.location;
        this.gender = bio.gender;
    }
}

Person.prototype.speak = function(){
    return `Hello my name is ${this.name}, a am from ${this.location}`
}

