'use strict'; /* directive to browser, run in strict mode be harsh on syntax */


/* JavaScript will go here */
console.log("Hello World!"); 

/* camelCase variable names */

//Make a new string variable for the value "The iSchool is my school"
var rex = "The iSchool is my school";

//Log out the string
console.log(rex);

//Convert the string to upper case, replacing the previous string
//Log out the changed variable
rex = rex.toUpperCase();
console.log(rex);


//Use the substring method to extract chars 2 through 10 (inclusive) 
//into a new variable, and log that variable
var kwon = rex.substr(2, 11); // would be inclusive
console.log(kwon);


//Use the indexOf method to see if the word "cool" is in your string
console.log(kwon.indexOf("cool")); 

//Declare a new variable `rect` that represents a rectangle
//This should be an Object with properties:
//  x-coordinate of 30, y-coordinate of 50
//  width of 100, height of 50
var rect = { xCoordinate: 30, yCoordinate: 50, width: 100,height: 50};


//Log out the rectangle's starting position (as "30, 50")
console.log(rect.xCoordinate + "," +rect.yCoordinate);

//Log out the rectangle's area

console.log(rect.width * rect.height);
//"Move" the rectangle to the right by 20 and up by 10
//by changing its properties
rect.xCoordinate = rect.xCoordinate + 20;
rect.yCoordinate = rect.yCoordinate - 10;

//Log out the rectangle's new position
console.log(rect.xCoordinate + "," + rect.yCoordinate);

//Declare a variable `circle` that represents a circle
//This should be an Object with properties:
//  center-x-coord of 50, center-y-coord of 50
//  radius of 35
var circle = {
    centerX: 50,
    centerY: 50,
    rad: 35
};

//Declare a variable `shapes` that represents a list of shapes
//The list should contain the rectangle and the circle
var shapes = [];
shapes[0] = rect;
shapes[1] = circle;
console.log(shapes);

//Implement a function `getArea()` that takes as a 
//parameter an object representing a circle (like 
//from the last exercise) and returns the area of 
//that circle. 
//  Area calculated as is π*(radius^2)


//HINTS: 
// 1. Pi is defined in the Math class
// 2. ^ is not an exponential operator!

//The area of your circle should be 3848.451

function getArea(rad) {
    return rad * rad * Math.PI;
}

console.log(getArea(circle.rad)); 

var numbers = [2,0,6,6,8,5,1,6,2,2];

//Use a forEach loop to sum up the numbers 
//in the array. Log out this sum.
var sum = 0;
numbers.forEach(function(item) {
    sum += item;
});

console.log(sum);



//Use a forEach loop to find the biggest 
//number in the array. Log out this number.