// CODE here for your Lambda Classes
class Person{
    constructor(bio){
        this.name = bio.name;
        this.age = bio.age;
        this.gender = bio.gender;
    }
}

Person.prototype.speak = function(){
    return `Hello my name is ${this.name}, and I am ${this.age}`
}

class Instrcutor extends Person {
    constructor(characteristics){
        super(characteristics);
        this.specialty = characteristics.specialty;
        this.favLanguage = characteristics.favLanguage;
        this.sectionTaught = characteristics.sectionTaught;
    }
}

Instrcutor.prototype.grade = function (){
    console.log(Math.random() - student.grade);
}

Instrcutor.prototype.demo = function (){
    console.log(`I teach ${this.sectionTaught}`)
}

class TeamLeader extends Instructor {
    constructor (skills){
        super(skills);
        this.favLanguage = skills.favLanguage;
        this.framework = skills.framework
    }   
}

TeamLeader.prototype.language = function(){
    console.log(`My favorite language is ${this.favLanguage}`)
}
TeamLeader.prototype.fram = function(){
    console.log(`My favorite framework is ${this.framework}`)
}

class Student extends Person {
    constructor(likes){
        super(likes);
        this.favLang = likes.favLang;
        this.framework = likes.framework;
        this.grade = likes.grade;
    }
}

Student.prototype.lang = function(){
    console.log(`${this.name} loves programming in ${this.favLang}`)
}

Student.prototype.framework = function (){
    console.log(`${this.name} loves to use ${this.framework}`)
}

Student.prototype.grd = function () {
    if(this.grae > 70){
        console.log(`You're passing!`)
    }else{
        console.log(`Get gud`)
    }
}

const pave = new Instrcutor({
    name: `Pace`,
    age: `??`,
    gender: `make`
})

const javier = new TeamLeader({
    name: `Javier`,
    age: `??`,
    gender: `Male`,
    favLanguage: `JavaScript`,
    framework: `React.js`
})

const jesse = new Student({
    name: `Jesse`,
    age: `29`,
    gender: `Male`,
    favLang: `Python`,
    framework: `.NET`
})

jesse.grd();
javier.favLang();
pace.demo();