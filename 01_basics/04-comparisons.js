//----Basic Comparisons----
console.log(2 < 1)
console.log(2 <= 1)
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 == 1)
console.log(2 != 1)
/* value of comparison is a boolean  value
it's either true or false */

/* these comparions are same, in case of strings as well */

/* problem occur when we don't compare the same data type
or we can say when we compare different data types
this sometimes give unpredictable results like- */
console.log("2" > 1) // O/P => true, JS automatically converted "2" to 2
console.log("02" > 1) // O/P => true, JS automatically converted "02" to 2
// different data type

/* always remember to check whether you are comparing same data types or not
to get predictable results */

console.log(null > 0) // false (0>0; 0 is not greater than 0)
console.log(null == 0) // false (NaN==0 ; NaN is not equal to 0)
console.log(null >= 0) // true (0>=0; 0 is greater than or equal to 0)
console.log(null != 0) // true (NaN==0 ; NaN is not equal to 0)
/* this gives unpredictable results
as sometimes it converts null to 0
and sometimes to NaN */
// we generally avoid such comparisons
/* the reason is that 
an equality check == and comparisons >,<,>=,<= 
works differently in JS 
equality converts null to NaN
comparisons convert null to a number, treating it as 0
that's why (null >= 0) is true
and (null > 0) is false; */
// same also happens with undefined
console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false
console.log(undefined != 0) // true

/* in JavaScript there is a difference between 
equality operation and comparison check
these are different operations */

/* strict equality check ===
it checks for value as well as data type */

console.log("2" == 2) // true (equality check)
console.log("2" === 2) // false (strict equality check)