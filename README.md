# Learning-JavaScript with Thabang M. Modiba

## Data Types

* String
* Number
* Boolean
* Object
* Array
* Null
* Undefined

## Variables
In JavaScript, variables can be declared using ```var```, ```let``` or ```const```.

### Different ways to declare a variable.
* Using ```var```: ```var name = "Thabang";```
* Using ```let```: ```let age = 22;```
* Using ```const```: ```const IS_STUDENT = true;```

### What is the difference between ```var```, ```let``` and ```const```?
* ```var``` is function-scoped, while ```let``` and ```const``` are block-scoped.
* ```var``` can be redeclared and updated, while ```let``` can be updated but not redeclared, and ```const``` cannot be updated or redeclared.
* ```var``` is hoisted to the top of its scope and initialized with undefined, while ```let``` and ```const``` are hoisted but not initialized.

Variable names are case sensitive.

### Naming Variables
* Variable names can contain letters, digits, underscores, and dollar signs.
* Variable names must begin with a letter, underscore, or dollar sign.
* Variable names cannot be JavaScript reserved words like null, true or false.
* Variable names are case sensitive as mentioned.
* Variable names should be meaningful.

### What is the difference between declaring a variable and asigning a variable?
Declaring a variable means creating it, while assigning a variable means giving it a value. We use the **bold**assignment operator**bold** ```=``` to assing a variable.

* Declaring a variable: ```var myName;```
* Assigning a variable: ``` myName = "Thabang M. Modiba;```

## Increment and Decrement.
Increamenting a variable means increasing its value by 1, while decrementing a variable means decreasing its value by 1.

* Increment operator: ```++```
* Decrement operator: ```--```

## Escape Character
The backlash (\) is used as an escape character in JavaScript. It allows you to include special characters in a String.

* \' - Single qoute
* \'' - Double qoutes
* \\ - Backlash
* \n - New line
* \r - Carriage return
* \t - tab
* \b - Backspace
* \f - Form feed

## Concatenation
Concatenation is the process of joining two or more Strings together. In JavaScript, we use the ```+``` operator to concatenate Strings.

Example: ```"Hello, " + "world!"``` results in ```"Hello, world!"``` as a single String.

We can also use the operator ```+=``` to concatenate a String to an existing variable. Example:
```
let message = "Hello, ";
message += "world!";

// Results in "Hello, world!"
```

## Arithmetic Operators in JavaScript
* ```+``` Addition
* ```-``` Subtraction
* ```*``` Multiplication
* ```/``` Division
* ```%``` Modulus
* ```++``` Increment
* ```--``` Decrement

## Strings and dot lenth function
Strings are used to represent text in JavaScript. They are enclosed in single or double qoutes as we've seen. The length property of a String returns the number of characters in the String. Example:
```
var name = "Thabang";
console.log(name.length);

// Results: 5
```

### Immutability of Strings

In JavaScript, Strings are immutable, which means once is a String is created, it cannot be changed. Any operation that seems to modify the String actually creates a new String.

### Finding a character in a String

You can access individual characters in a String using bracket notation and the index of the character you eant to access. Note that String indices are zero-based, meaning the first character is at index 0. Example:
```
var myName = "Thabang";
console.log(myName[0]);

// Results: T
```

