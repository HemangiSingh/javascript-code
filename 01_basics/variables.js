const accountId = 144553 // for defining constants in js
let accountEmail = "hemangi@gmail.com" //used for defining variables. It is aware of block scope
var accountPassword = "12345" /* it is also used for defining variables.
 don't use it because it doesn't know or understand scope*/
accountCity = "Jaipur"
/* not a good way to code but we can do that as js is a secure prog. language
so we can reserve memory for a variable without writing about it*/
let accountState;
/* we are defining variable whose value is not known 
at the initial stage but can be known later
if you just declare variable without giving it any value
then js considers it as "undefined" */

/* use const for constant and use let for variable
prefer not to use var because of issue in block scope and functional scope */

// we can't change const
// accountId = 2
//sinle line comment
/* multiline
comment*/

accountEmail = "hs@hs.com"
accountPassword = "1212444"
accountCity = "Bengaluru"

console.log(accountId)
// it simply prints somnething as a line

console.table([accountId, accountEmail, accountPassword, accountCity])
/* in this we can pass multiple variables and constants
this shows data in a tabular form */ 