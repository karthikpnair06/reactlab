//variablesin js
let name = "Dayanand";
//const age= 21;

console.log(name);
console.log(age);

//functions
function greet() {
    console.log("hello!");
}

//call the function
greet();
greet();
greet();

//arrow function
const greetUser = () => {
    console.log("Hello user");
}
greetUser();
greetUser();
greetUser();

//functions with parameter
const greetUser1 = (userName) => {
    console.log("Hello " + userName);
}
greetUser1("Dayanand");
greetUser1("Fadhl");
greetUser1("Shamim");

//create a variable and assign city name
//create a function takes ur city name as a parameter and print it
//convert into an arrow function

let city = "Ernakulam";

function firstCity(){
    console.log(city);
}
firstCity();

const newCity = () => {
    console.log("KOCHI");
}
newCity();

//objects in javascript
const user = {
    userName: "Eldho",
    age:23,
    city: "perumbavoor"
};

console.log(user.userName);
console.log(user.city);
console.log(user.age);


//destructuring 

const {userName, age} = user;
//learn about destructuring




