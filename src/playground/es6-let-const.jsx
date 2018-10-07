import React from 'react';
import ReactDOM from 'react-dom';

var nameVar = "Henrik";
console.log("NameVar", nameVar);


let nameLet = "Somthing";
console.log("nameLet", nameLet);
nameLet = "Somthing new";

const nameConst = "This is constent";
console.log("nameConst", nameConst);

//Block lvl scoping
var fullName = "Henrik Sandberg";

if (fullName){
    let firstname = fullName.split(" ")[0];
    console.log(firstname);
}