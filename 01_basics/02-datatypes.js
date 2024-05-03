"use strict"; // this will treat all JS code as newer version of JavaScript

//alert(3+3)
/* we can't write like that
because we are using node not browser or html
In node we can't perform arithmetic operations like that in alert
there is another syntax for doing so*/

/* sometimes we write ";" sometimes we don't
but it's prefferable not to write ";" */

/* In your code readability matters a lot
so try to write code as readable and future proof as possible */

console.log(3+3)

console.log(3
    +3) /* can write like that but not prefferable
    because it decreases readability of code */
    
console.log(3+3); console("Hemangi")/* can write like that but not prefferable
because it decreases readability of code */

/* whenever you want to see documentation of anything 
you can search it on "mdn"(site) or google
or if you want to see original documentation
then go to tc39.es as it is standard for JS */

let name = "Hemangi" // string datatype
let age = 22 // integer datatype
let isLoggeedIn = false // boolean datatype

/* Primitive data types in JavaScript */
// number => 2^53
// bigint
// string => ""
/* string can be written in "" or '' 
but "" preffered */
// boolean => true/false 
/* null => it's a standalone value, it's a representation of empty value
null is a special variable,
null means empty, you can even define it */
/* undefined => when you don't define value of any declared variable
like -> let state;
variable declared but value not defined */
/* symbol => unique
it will be used mainly when we use react
when you create multiple components
and want to identify that this component is unique from another component 
then we use symbol */

//object

/* typeof -> used to find the datatype
we can give it value either directly or the variables
and even some special values such as null or undefined*/ 
console.log(typeof "Hemangi") 
console.log(typeof age)
console.log(typeof null) // it has type object. some people say it's an error of JS language
console.log(typeof undefined) // it has type undefined