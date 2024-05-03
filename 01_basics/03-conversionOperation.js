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

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//it'll give true as value