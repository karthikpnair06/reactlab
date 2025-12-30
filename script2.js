//DOM- document object model
// it is a tree like structure of our web application
// we can access and manipulate html elements using DOM
// we can access DOM using javascript

//ways to access elements in DOM
const title =document.getElementById("title");
console.log(title);

//event
const button = document.getElementById("btn");
button.addEventListener("click", () => {
        console.log("Button Selected");
});

let count=0;

const countText =document.getElementById("count");
const incbtn=document.getElementById("increase");
incbtn.addEventListener("click",() => {
        count++;
        countText.innerText = count;
});