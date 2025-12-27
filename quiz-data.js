const quizData = [
  {
    question: "What does JavaScript primarily run on?",
    options: ["Server only", "Browser", "Database", "Operating system"],
    answer: 1,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    answer: 0,
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: ["Number", "Boolean", "Float", "Object"],
    answer: 2,
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: 1,
  },
  {
    question: "Which symbol is used for strict equality?",
    options: ["==", "=", "===", "!="],
    answer: 2,
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Document Option Manager",
      "Dynamic Output Mode",
    ],
    answer: 0,
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: 0,
  },
  {
    question: "Which keyword is used to create a function?",
    options: ["function", "def", "fun", "method"],
    answer: 0,
  },
  {
    question: "What does NaN mean?",
    options: ["No assigned Number", "Not a Name", "Not a Number", "Null and None"],
    answer: 2,
  },
  {
    question: "Which method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "Which event occurs when a button is clicked?",
    options: ["onhover", "onchange", "onclick", "onsubmit"],
    answer: 2,
  },
  {
    question: "Which statement is used for decision-making?",
    options: ["for", "while", "if", "switch"],
    answer: 2,
  },
  {
    question: "How do you declare a constant?",
    options: ["let", "var", "const", "static"],
    answer: 2,
  },
  {
    question: "Which method removes the last array element?",
    options: ["pop()", "push()", "slice()", "splice()"],
    answer: 0,
  },
  {
    question: "Which operator is used to combine strings?",
    options: ["+", "-", "*", "&"],
    answer: 0,
  },
  {
    question: "What does localStorage store?",
    options: [
      "Temporary session data",
      "Data cleared on refresh",
      "Persistent browser data",
      "Server-side data",
    ],
    answer: 2,
  },
  {
    question: "Which keyword stops a loop?",
    options: ["stop", "exit", "break", "return"],
    answer: 2,
  },
  {
    question: "Which function runs after page load?",
    options: [
      "window.ready()",
      "DOMContentLoaded",
      "document.start()",
      "onPageLoad()",
    ],
    answer: 1,
  },
  {
    question: "Which method selects an element by ID?",
    options: [
      "getElement()",
      "querySelectorAll()",
      "getElementById()",
      "selectById()",
    ],
    answer: 2,
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: 2,
  },
  {
    question: "How do you create an array in JavaScript?",
    options: [
      "var arr = ();", 
      "var arr = [];",
      "var arr = {};",
      "var arr = new Array();",
    ],
    answer: 1,
  },
  {
    question: "Which method is used to round a number?",
    options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    answer: 0,  
  },
{
    question: "What is the output of 'typeof null'?",
    options: ["object", "null", "undefined", "boolean"],
    answer: 0,
},
{
    question: "Which of the following is NOT a looping structure in JavaScript?",
    options: ["for", "while", "foreach", "loop"],
    answer: 3,
},
{
    question: "How do you create a new object in JavaScript?",
    options: [
      "var obj = {};",
      "var obj = new Object();",
      "var obj = Object.create();",
      "var obj = new object();",
    ],
    answer: 0,
  },
  {
    question: "Which method is used to add an element at the beginning of an array?",
    options: ["unshift()", "push()", "shift()", "pop()"],
    answer: 0,
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 'red', 'green', 'blue';",
      "var colors = ['red', 'green', 'blue'];",
      "var colors = (red, green, blue);",
      "var colors = {red, green, blue};",
    ],
    answer: 1,
  },
  {
    question: "What's the error in this code: if (x = 5) {}?",
    options: [
      "Should use '==' for comparison",
      "Should use '===' for comparison",
      "Should use '!=' for comparison",
      "Should use '!==' for comparison",
    ],
    answer: 0,
  },
  {
    question: "Which built-in method combines the text of two strings and returns a new string?",
    options: ["append()", "concat()", "attach()", "combine()"],
    answer: 1,
  },
  {
    question: "How do you find the length of an array named 'arr'?",
    options: ["arr.size()", "arr.length", "arr.count()", "arr.total()"],
    answer: 1,
  },
  {
    question: "Which of the following is a way to create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "var myFunction = function() {}",
      "var myFunction = () => {}",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "What will 'console.log(2 + '2')' output?",
    options: ["4", "'22'", "NaN", "Error"],
    answer: 1,  
  },
  {
    question: "Which of this is  correctly deconstucted from the object?",
    options: [
      "const {a, b} = obj;",
        "const [a, b] = obj;",
        "const (a, b) = obj;",
        "const <a, b> = obj;",
    ],
    answer: 0,  
  },
  {
    question: "In async programming, which of the following is used to handle asynchronous operations?",
    options: ["Promises", "Callbacks", "Async/Await", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following methods is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "Refers to the current function",
      "Refers to the current object",
      "Refers to the global object",
      "Refers to the parent function",
    ],
    answer: 1,
  },
  {
    question: "During which phase of the event flow does event capturing occur?",
    options: ["Bubbling phase", "Target phase", "Capturing phase", "None of the above"],
    answer: 2,
  },
  {
    question: "Why is 'use strict' used in JavaScript?",
    options: [
      "To enable strict mode which catches common coding errors",
        "To allow the use of undeclared variables",
        "To disable error checking",
        "To enable compatibility with older browsers",
    ],
    answer: 0,
  },
  {
    question: "Closures in JavaScript are created when:",
    options: [
      "A function is defined inside another function",
        "A function is called",
        "A variable is declared",
        "An object is created",
    ],
    answer: 0,
  }, 
  {
    question: "When creating a class in JavaScript, which keyword is used to define a constructor method?",
    options: ["init", "constructor", "create", "new"],
    answer: 1,
  },
  {
    question: "If a promise is rejected, which method is used to handle the rejection?",
    options: [".then()", ".catch()", ".finally()", ".reject()"],
    answer: 1,
  },
  {
    question: "What will be the output of '0.1 + 0.2 === 0.3' in JavaScript?",
    options: ["true", "false", "undefined", "TypeError"],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a way to create an object in JavaScript?",
    options: [
      "Using object literals",
      "Using the new keyword",
      "Using Object.create()",
      "Using the class keyword",
    ],
    answer: 3,
  },
  {
    question: "What is the purpose of the 'bind()' method in JavaScript?",
    options: [
      "To create a new function with a specific 'this' value",
        "To call a function with a specific 'this' value",
        "To immediately invoke a function",
        "To create a copy of a function",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is true about JavaScript's event loop?",
    options: [
      "It handles synchronous code only",
        "It manages asynchronous code execution",
        "It blocks the main thread",
        "It is only used in server-side JavaScript",
    ],
    answer: 1,
  },
  {
    question: "What will be the output of 'typeof NaN' in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    answer: 0,
  },
  {
    question: "Which of the following methods is used to remove whitespace from both ends of a string?",
    options: ["trim()", "slice()", "split()", "replace()"],
    answer: 0,
  },
  {
    question: "What is the result of '[] + {}' in JavaScript?",
    options: ["'[object Object]'", "'[object Object]'", "'[object Object]'", "'[object Object]'"],
    answer: 0,
  },
  {
    question: "Which of the following is NOT a feature of ES6?",
    options: [
      "Arrow functions",
      "Template literals",
      "Destructuring assignment",
      "Classes",
    ],
    answer: 3,
  },
  {
    question: "What will be the output of 'console.log(typeof function() {})'?",
    options: ["function", "object", "undefined", "string"],
    answer: 0,
  },
];
