class Person{
    constructor(name = "Annonymos", age=0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}


class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        
        if (this.hasMajor()){
            description += `He is majoring in ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }

    getGretting(){
        return this.hasLocation() ? 
            `${super.getGretting()} My home is ${this.homeLocation}` : 
            super.getGretting();
    }

}

const me = new Traveler("Henrik", 27, "Norway");
console.log(me);
console.log(me.getGretting());


const other = new Traveler();
console.log(other);
console.log(other.getGretting());