//Some important javascript snippets for web development 
// 1.DOM Manipulation:

//--Access an element by its ID: 
const element = document.getElementById('elementId');

//--Add a class to an element: 
element.classList.add('className');


//2.Event Handling:

//--Attach an event listener to an element: 
element.addEventListener('event', eventHandler);

//--Prevent the default behavior of an event: 
event.preventDefault();


//3.AJAX Requests:

//--Make an AJAX GET request using the Fetch API:
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Handle the data
  })
  .catch(error => {
    // Handle the error
  });


//4.Local Storage:

//--Store data in local storage: 
localStorage.setItem('key', 'value');

//Retrieve data from local storage: 
const data = localStorage.getItem('key');


//5.Error Handling:

//Try-catch block for error handling:  
try {
    // Code that may throw an error
  } catch (error) {
    // Handle the error
  }


// 6.Array Manipulation

// --Iterate over an array using the forEach method:  
array.forEach(item => {
    // Code to execute for each item
  });
 
  
//7.Regular Expressions:

//--Test if a string matches a regular expression: 
const isMatch = /pattern/.test(string);


//8.Conditional Statements:

//--If-else statement:
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}


//9.Date and Time:

//--Get the current date and time: 
const currentDate = new Date();


//10.Template Literals:

//--Create a string with dynamic values:
const name = 'John';
const greeting = `Hello, ${name}!`;  


//11.String Manipulation:

//--Convert a string to uppercase: 
const upperCaseString = 'hello'.toUpperCase();

//--Split a string into an array: 
const stringArray = 'hello world'.split(' ');

//12.Array Methods:

//--Check if an array includes a specific element: 
const isIncluded = array.includes(element);

//--Remove the last element from an array: 
array.pop();


//13.Object Manipulation:

//--Access a property of an object: 
const value = object.property;

//--Check if an object has a specific property: 
const hasProperty = 'property' in object;


//14.Async/Await:

//Make an asynchronous request using async/await:
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Handle the data
  } catch (error) {
    // Handle the error
  }
}


//15.Map Method:

//--Create a new array by applying a function to each element:
const newArray = array.map(item => {
  // Code to transform each item
  return transformedItem;
});


//16.Arrow Functions:

//Define a function using arrow syntax:
const add = (a, b) => {
  return a + b;
};


//17.JSON Manipulation:

//--Convert an object to a JSON string: 
const jsonString = JSON.stringify(object);

//--Parse a JSON string into an object: 
const jsonObject = JSON.parse(jsonString);


//18.Promises:

//--Create a new Promise:
const promise = new Promise((resolve, reject) => {
  // Code that may resolve or reject the promise
});


//19.Math Operations:

//--Generate a random number between two values: 
const randomNumber = Math.random() * (max - min) + min;

//--Round a number to a specified decimal place: 
const roundedNumber = number.toFixed(decimalPlaces);


//10.Element Creation and Manipulation:

//--Create a new HTML element: 
const newElement = document.createElement('tagName');

//--Set the text content of an element: 
element.textContent = 'text';


//21.Scrolling:

//Scroll to a specific position on the page: 
window.scrollTo(x, y);


//22.Form Handling:

//--Access the value of an input element: 
const inputValue = inputElement.value;

//--Prevent form submission: 
event.preventDefault();


//23.Async Function Error Handling:

//--Handle errors in an async function using try/catch:
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Handle the data
  } catch (error) {
    // Handle the error
  }
}


//24.Object Destructuring:

//Extract properties from an object into variables:
const { name2, age } = personObject;



//25.Array Spread Operator:

//Concatenate arrays using the spread operator:
const combinedArray = [...array1, ...array2];


//26.Element Visibility:

//--Hide an element: 
element.style.display = 'none';

//--Show an element: 
element.style.display = 'block';


//27.Timer Functions:

//--Execute a function after a specified delay:

setTimeout(() => {
  // Code to execute after the delay
}, delayInMilliseconds);


//28.URL Parameters:

//--Get URL parameters:
const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('param');


//29.Element Attributes:

//Set an attribute of an element: 
element.setAttribute('attribute', 'value');

//Get the value of an attribute: 
const attributeValue = element.getAttribute('attribute');


//30.Form Validation:

//Validate a form input using regular expressions:
const isValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput);
