//Arrys in js
const skills =["HTML","CSS","JS","REACT"];
console.log(skills[3]);
console.log(skills.length);


//map function
skills.map((skill) => {
    console.log(skill);
});

//filter function in array
const numbers =[1,2,3,4,5,6,7,8,9,11,16,50,55];
const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

const odd = numbers.filter((num) => num % 2 !== 0);
console.log(odd);

const g5 =numbers.filter((num) => num>5);
console.log(g5);

//array of ur 5 friends name
//use map() fn to print them
//use filter() fn to get names having length >10


const friends=["Karthik","Arun","Vijay","Ajith","Suriya"];
friends.map((friend)=>{
    console.log(friend);
});

const g10 =numbers.filter((num) => num>10);
console.log(g10);

const countries =["India","USA","UK","Canada","Australia"];
countries.map((country)=>{
    console.log(country);
}); 