//Argument object is no longer bound

const add = (a, b) => a + b;

console.log(add(55, 1));


//This keyword is no longer bound
const user = {
    name: "Henrik",
    cities: ["Lillestrøm", "Oslo", "Koblenz"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    } 
};

//Challenge
const multiplator ={
    numbers: [1,2,3,4,5,6,7,8,9,10],
    multipleBy: 3,
    multiplyor(){
        return this.numbers.map((numb) => this.multipleBy * numb);
    }
};
console.log(multiplator.multiplyor());