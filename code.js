let myVariable = 42;
console.log(myVariable);

myVariable = 36;
console.log(myVariable);

42
42 + 31
let answer = 42;

let someLabelOfMyCreation
someLabelOfMyCreation = 42;

let x = 4;
let y = 7;
let temp = x;
x = y;
y = temp;
console.log(y);

let totalPoints = 1992;
let numberOfStudents = 24;
totalPoints / numberOfStudents
let averageScore = totalPoints / numberOfStudents;
console.log(averageScore);

let a = 2;
let b = 3;
a = a + 1;
console.log(a * b);

// Any unit of code that can be evaluated to a value is an expression

// A statement is a piece of code that tells the computer to perform an action.

("String's are fun!");
("Here is a quote within a string \"hello world\" its easy!");

// the backslash '\' is an escape character in javaScript
// \n creates a new line
// \t creates a new tab
// Note that newlines and tabs do not work in raw HTML.
// So if your text is going to be rendered in HTML, you should not
// use them.However, newlines and tabs do get rendered in text within
// some JavaScript libraries, so they are useful sometimes.

// boolean comparisons ie true/false 
// does
"apple" === "apple"
"apple" === "pear"
// does not
"hello" !== "hello"
"hello" !== "world"

let greeting = "Howdy"
let name = "neighbor!"
console.log(greeting + name);
let firstname = "Ethan";
let lastname = "Swafford";
let fullname = firstname + lastname;
console.log(fullname);
fullname = firstname + " " + lastname;
console.log(fullname);

// conditionals and if else statements

/* if (condition) {
    // code to run if condition is true or met.
    outcome
} else {
    // code to run instead.
    outcome
};*/

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }

}

// milks 
let dairyMilk = false;
let cream = false;
let soyMilk = false;

let milk = prompt("What kind of milk is in your coffee?")
if (milk === "dairy") {
    dairyMilk = true;
} else if (milk === "cream" || "creamer") {
    cream = true;
} else if (milk === "soy" || "silk") {
    soyMilk = true;
}
// espresso 
let caffeinatedEspresso = false;
let decafEspresso = false;

let caffeine = prompt("Is your coffee caffeinated?")
if (caffeine === "yes" || "Yes") {
    caffeinatedEspresso = true;
} else if (caffeine === "no" || "No") {
    decafEspresso = true;
}
// chocolates
let darkChocolate = false;
let milkChocolate = false;

let chocolate = prompt("Do you add chocolate to your coffee?")
if (chocolate === "yes" || "Yes") {
    darkChocolate = true;
    milkChocolate = true;
} else if (chocolate === "no" || "No") {
    darkChocolate = false;
    milkChocolate = false;
}

let isLatte =
    (dairyMilk || cream || soyMilk) &&
    (caffeinatedEspresso || decafEspresso) &&
    !(darkChocolate || milkChocolate)
if (isLatte) {
    console.log("Enjoy you're Latte!");
} else {
    console.log("Enjoy whatever it is you're drinking!");
}

// control flow is the order in which the computer executes code. Things like conditionals
// change control flow.



// functions

/*console.log("this is a function");

alert("This is an alert function test!");

prompt("This is a prompt test, enter anything:");

let password = prompt("Enter your password:")
console.log(password);

document.write("<h2>javaScript is cool,<br/>this is a js function,<br/>'document.write'</h2>");*/

let userNames = ['greggd', 'sherbert2017', 'puppybro3'];
console.log("The length of the array is: ", userNames.length);
const firstUserName = userNames[0];
console.log(firstUserName);
let lastUserName = userNames[userNames.length - 1];
console.log(lastUserName);
let myArray = ['a', 'b', 'c', 'd', 'e'];
let index = 2;
console.log(myArray[index]);
if (index < myArray.length) {
    console.log("The character is: " + myArray[index])
} else {
    console.log("The index: " + index + "does not exist in the array!")
}

let myNewArray = [];
myNewArray[0] = "f";
myNewArray[1] = "g";
myNewArray[4] = "h";
console.log(myNewArray);

let myNextArray = [];
console.log(myNextArray.length);
myNextArray[myNextArray.length] = "first value"
console.log(myNextArray.length);
myNextArray[myNextArray.length] = "second value"
console.log(myNextArray.length)

let newArray = [];
newArray.push("a");
newArray.push("b");
newArray.push("c");
console.log(newArray);

// Primitives can be used with operators.
// Objects should not be used with operators.
// Different types of objects have useful methods and properties other than operators.

let combinedArray = myArray.concat(myNewArray);
console.log(combinedArray);
combinedArray.length;
combinedArray.sort(); // This sorts the array into ascending numerical order.
console.log(combinedArray);

// variable.property as the variable is an object, examples:
// array.length or myArray.sort // length and sort are properties of the objects.
// A method is a function attached as a property to an object.
// myArray1.concat(myArray2)


// creating 3 boxes:
// our box to be created on the HTML document from the JS file -> document.body.innerHTML += '<div class="box"></div>';
let counter = 1; // keep track of how many times the code has ran
while (counter <= 3) {
    document.body.innerHTML += '<div class="box"></div>'
    counter += 1;
}



// for loops
let states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Florida",
    "Georgia",
    "Hawaii",
    "Tennessee",
    "Texas"
]
for (i = 0; i < states.length; i += 2) {
    console.log(states[i])
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let numbers = [12, 5, 8, 1, 32, 16];

let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
console.log(sum);

// finding the largest number of numbers array
let largestNumber = 0;
for (let index = 0; index < numbers.length; index++) {
    let currentNumber = numbers[index];
    if (currentNumber > largestNumber) {
        largestNumber = currentNumber
    }
}
console.log(largestNumber);

// reversing the array and adding the numbers to a new array
let reversed = [];
for (let index = (numbers.length - 1); index >= 0; index--) {
    reversed.push(numbers[index])
}
console.log(reversed);

// filter array
let filteredArray = [];
for (index = 0; index < numbers.length; index++) {
    let currentNumber = numbers[index]
    if (currentNumber > 10) {
        filteredArray.push(currentNumber)
    }
}
console.log(filteredArray);



// functions 
function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // see javaScript Math functions
}
rollDie();

function createTitle() {
    document.write("<h1>Page Title</h1>");
}
createTitle();

function addNumbers(a, b) {
    return a + b;
}
addNumbers(124, 6)

// function to add sales tax
function addTax(price) {
    let taxRate = 0.10
    return price * (1 + taxRate);
}

// DOM, Template literals, and String Interpolation
/*document.write(`
    <h1>To Do List</h1>
    <ul>
        <li>Get Groceries</li>
        <li>Take Out The Trash</li>
        <li>Sweep The Kitchen</li>
    </ul>`)*/

// or render to html document by looping through arrays and writing it to the document in JS
/*let todoItems = [
    "Get groceries",
    "Take out the trash",
    "Sweep the kitchen"
];

document.write("<h1>My Todo List</h1>")
document.write("<ul>");
for (let i = 0; i < todoItems.length; i++) {
    document.write(`<li>${todoItems[i]}</li>`);
}
document.write("</ul>");*/

// or render to the entire html doc all at once
let todoItems = [
    "Get groceries",
    "Take out the trash",
    "Sweep the kitchen"
];

let content = "";
content += "<h1>My Todo List</h1>"
content += "<ul>"
for (let i = 0; i < todoItems.length; i++) {
    content += (`<li>${todoItems[i]}</li>`);
}
content += ("</ul>");
document.write(content);