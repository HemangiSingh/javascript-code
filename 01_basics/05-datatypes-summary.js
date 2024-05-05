/* categorization is done based on-
how data is stored in the memory 
and how can you access them
acc. to it there are 2 categories of data
1. Primitive Data types
2. Non primitive Data types or refferenced data type */

/* All primitive types are call by value
which means real reference of the value is not given to you
you were given a copy of the original Data
and any changes made by you, is done on the copy not on the original data */

/* Primitive Data types----
7 types(categories)-
String,
Number,
Boolean,
null (doesn't mean zero, it means completely empty (ekdam khali)),
unspecified (it means variable declared hai uske lia memory reserved hai 
 lekin value nahi di h that is it's value is not defined),
Symbol (to uniquely identify components)
BigInt(for storing long range values) */

/* reference type (non-primitive type)-----
reference of these data can be provided
3 types (categories)- 
Array,
Objects,
Functions */

/* if you want to master JS
just master two components of it
that is Object and web events/ browser types */

/* JS is statically typed language or dynamically typed language?
in JS we don't need to define the type of the variables
JavaScript is a dynamically typed language. 
This means that the type of a variable is not declared when the variable is created,
but rather is determined by the value that is assigned to the variable. */

const score = 100;
const scoreValue = 100.3;
let value;
// both comes under type Number

let str = "Hemangi";

const isLoggedIn = false // boolean type

let outsideTemp = null; 
// null type (mtlb temp kya h vo pata hi nhi kr paye to completely empty)

let userEmail; 
// type undefined (value define nhi ki na userEmail ki to undefined)

//----symbol
const id = Symbol("123") // 123 is value jo humne pass ki h
const anotherId = Symbol("123") // isko bhi 123 value di hai
// value same hai still alag alag hain
console.log(id === anotherId); // O/P => false{
  
// Symbol has type Symbol

const bigNumber = 3457272748984197n
// value k last mai "n" laga do to make it BigInt

const heroes = ["shaktiman", "naagraj", "doga"] // array type

{
    name : "Hemangi";
    age: 22;
}
// here we define values in key-value pair

let myObj = {
    name : "Hemangi",
    age : 22
}
// we can also store them in some variable

const myfunction = function()
{
    console.log("Hello, World");
}
//declaring a function and storing it in some other variable

console.log(typeof null); // typeof null is object
console.log(typeof outsideTemp);
// typeof function- this function tells about the data type of any value or variable
/* typeof undefined is undefined,
Any variable that has not been assigned a value has the value undefined. */

console.log(typeof myfunction);
/* typeof function is function
and that's called as object function or function object */

// all non-primitve types have return typeof object
// type of symbol is symbol 

/*----data type  => return type----
Number  => number
String  => string
Boolean  => boolean
null  => object
unspecified  => undefined
Symbol  => symbol
BigInt  => bigint
Array  => object
Object  => object
Function  => function */

//______________Memory________________

/* there are two types of memory-
1. Stack memory => all primitive types used stack memory
2. Heap memory => all non-primitive types used Heap memory */

/* Stack memory is based on call by value
which means that when we give reference of that variable to another variable
then a copy of the original value is provided to it
and any changes made, will be on the copy
and not on the original value */

let youtubeName = "abc.com"
let anothername = youtubeName
console.log(anothername);
anothername = "def.com"
console.log(youtubeName);
console.log(anothername); 
// example of stack memory call by value

/* Heap memory is based on call by reference
which means that when we give reference of that variable to another variable
then a reference of the original value is provided to it
and any changes made in it, will be made on the original copy itself */

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}
let usertwo = userOne
console.log(userOne.email);
console.log(usertwo.email);
usertwo.email = "hemangi@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);
// example of Heap memory call by reference