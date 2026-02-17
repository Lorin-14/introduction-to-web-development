// JavaScript variables

var fullName = 'Lorrina Maharjan';
let address = 'Kathmandu , Nepal';
const bloodGroup = 'B+';

console.log('Full Name:',fullName);
console.log('Address:',address);
console.log('Blood Group:',bloodGroup);

// Data Types
let name = 'Lorrina'; //String
let age = 21; //Number
let isStudent = true; //Boolean
let hobbies= ['Coding','Traveling','Baking']; //Array
console.log(hobbies[0]);

let user = {
    name: 'Lorrina',
    age: 21,
    isStudent: true,
    hobbies:['Coding','Traveling','Baking'],
}; //Object:properties

console.log(user['name']);
console.log(user.name);

// Function
function greet(name){
    console.log('Welcome', name);
}
greet('Lorrina');

// DOM Manipulation
const headingElementById=document.getElementById('heading-2');
console.log('heading element by id',headingElementById);
const headingElementByQuery=document.querySelector('#heading-2');
console.log('heading element by query selector',headingElementByQuery);
headingElementByQuery.textContent='Get element by query selector';
headingElementByQuery.style.color='blue';

const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click',function(){
    alert ('Button clicked!');
    console.log('Button clicked');
})