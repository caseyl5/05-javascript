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
var kwon = rex.substr(1, 9);
console.log(kwon);


//Use the indexOf method to see if the word "cool" is in your string
console.log(kwon.indexOf("cool")); 