const square = function (x){
    return x*x;
};

const squareArrow = (x) => {
    return x*x;
};


const squareArrow = (x) => x * x;
console.log(squareArrow(8));


const getFirstName = (x) => x.split(" ")[0];
const oneWayToGetTheFirstName = function(x){
    return x.split(" ")[0];
}
console.log(oneWayToGetTheFirstName("Victor Wollebekk"));
console.log(getFirstName("Henrik Sandberg"));