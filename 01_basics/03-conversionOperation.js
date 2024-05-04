let score = "33abc" // here we what is the type of this variable
let temp = null
let another = undefined
let bvalue = true
let str = "Hemangi"

/* sometimes we take value from the front-end that is from user through forms
and there we don't know what is the type of the variable
whether it is number or string or any other data type 
there we use concept of conversion
like in the below line we take input from user 
so we don't know it's type
const {score} = req.body */

console.log(typeof score)
console.log(typeof (score)); //as method

let valueInNumber = Number(score) //something like class that's why N of data type Number is capital
// now it's guaranteed that string is conerted into no.
console.log(typeof valueInNumber);
console.log(valueInNumber);
/* if you convert non-numeric value into no. it can be done
but if you see the output of that no. after conversion
it's NaN which means Not a Number
JS has issues in case of numbers
so don't rely on JS in case of numbers
that's why many people use TypeScript */

console.log(temp);
/* this will give o/p as 0
in case of null this gives 0 */

console.log(another);
/* this will also give NaN 
type of NaN is also a number 
funny right!*/

console.log(bvalue);
/* in case of boolean value
type -> boolean
value- 
true = 1 and false = 0 */

console.log(str);
/* if we give string 
that can't be converted into no.
then that will also give NaN as O/P */

/* Conversion into number-
"33" => 33
"33abc" => NaN (Not a Number)(NaN has type number)
"Hemangi" => NaN (Not a Number)(NaN has type number)
true => 1; false => 0*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);// 1 will give true as value

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); // "" will give false as O/P if we convert it into boolean

let isLoggedIn2 = "Hemangi"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // "Hemangi" will give true as O/P if we convert it into boolean

let isLoggedIn3 = 23
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3);// any number will give true as O/P if we convert it into boolean

let isLoggedIn4 = null
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(booleanIsLoggedIn4); // null will give false as O/P if we convert it into boolean


let isLoggedIn5 = undefined
let booleanIsLoggedIn5 = Boolean(isLoggedIn5);
console.log(booleanIsLoggedIn5); // undefined will give false as O/P if we convert it into boolean

let isLoggedIn6 = NaN
let booleanIsLoggedIn6 = Boolean(isLoggedIn6);
console.log(booleanIsLoggedIn6); // undefined will give false as O/P if we convert it into boolean

/* conversion into boolean-
1 => true 
0 => false
any_number => true
"" => false
"any_non-empty_string" => true
null => false
undefined => false
NaN => false */


/*------ conversion into String----- */

let someNum = 33
let stringNum = String(someNum)
let stringNumType = console.log(typeof stringNum)
console.log(stringNum)
// number is converted directly to String as it is

let someBool = false
let stringBool = String(someBool)
let stringBoolType = console.log(typeof stringBool)
console.log(stringBool)
//boolean is also converted directly to string as it is

let someNull = null
let stringNull = String(someNull)
let stringNullType = console.log(typeof stringNull)
console.log(stringNull)
// null is also converted directly to string as it is

let someNaN = NaN
let stringNaN = String(someNaN)
let stringNaNType = console.log(typeof stringNaN)
console.log(stringNaN)
// NaN is also converted directly to string as it is

let someUnD = undefined
let stringUnD = String(someUnD)
let stringUnDType = console.log(typeof stringUnD)
console.log(stringUnD)
// undefined is also converted directly to string as it is

/* -------------- OPERATIONS ---------------*/

let value = 3
let negValue = -value
console.log(negValue)
// it gives negative vale

console.log(2+2); // addition
console.log(2-2); // subtraction
console.log(2*2); // multiplication
console.log(2**2); // power
console.log(2/2); // divide
console.log(2%3); // remainder/modulo

let str1 = "hello"
let str2 = " Hemangi"
let str3 = str1 + str2 // concatenation of strings
console.log(str3);

//-----Tricky Situation-------

console.log("1" + 2) // O/P => 12
console.log(1 + "2") // O/P => 12
/* simply 2 no h unme se ek string h,
 to string ki tarah concatenate ho jayega */
console.log("1" + 2 + 2) // O/P => 122
console.log(1 + 2 + "2") // O/P => 32
/* 3 or no more no h,
agar 1st no string h to string ki tarah concatenate honge sab.
agar pehle numbers hain fir string hai
to pehle no p jo operation h vo perform hoga 
then string ki tarah concatenate honge. */

console.log(3 + 4 * 5 % 3)
/* writing as such is not appreciated
because it is confusing
if you want to define operations on values,
make use of parenthesis like-*/
console.log(((3+4)*5)%3)

console.log(true) // O/P => true
console.log(+true) // O/P => 1 (+ converts it into boolean)
//console.log(true+) // O/P => error (as there is no operation like this)
console.log("") // O/P =>  (empty space)
console.log(+"") // O/P => 0 (+ converts it into boolean)
// this is tricky conversion but don't do that

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// writing like this is also not prefferable

let gameCounter = 100
++gameCounter; //pre-increment
console.log(gameCounter);
let gameCounter1 = 100
gameCounter1++; //post-increment
console.log(gameCounter1);
//although the value of both comes out to be same

/*---------- read in detail about pre/post increment/decrement
from js mdn or ecma js--------*/

let x = 3;
const y = x++;
console.log("x =",x, "y =", y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log("a =",a, "b =",b);
// Expected output: "a:4, b:4"