// Create a function that takes two numbers as arguments and returns their sum.
// console.log(Somme(7,15))
// function sumOfTwoNUmbers (number1, number2){
//     return number1+number2
// }

// sumOfTwoNUmbers(1,5)
// console.log(sumOfTwoNUmbers(4, 6));
// console.log(sumOfTwoNUmbers(10, 6));
// console.log(sumOfTwoNUmbers(41, 6));
// console.log(sumOfTwoNUmbers(4, 60));

// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))

// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))

// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))

// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))

// Create a function that  takes a string as argument and returns the length of this string.

// write a function that takes a string as argument and returns it to number

// write a function that takes a number as argument and returns it to string

// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
// function inputParameter(number) {
//   if (number % 3 === 0 && number === 0) {
//     return "FizzBuzz";
//   } else if (number % 3 === 0) {
//     return "Fizz";
//   } else if (number % 5 === 0) {
//     return "Buzz";
//   } else if (number % 3 !== 0 && number !== 0) {
//     return "given Input Number/Value";
//   } else {
//     return "Not a Number! Please Input Number"
//   }
// }
// console.log(inputParameter(100));

// Exercise 2

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040

// Example:
// > console.log(factorializer(7));
// > 5040

// function factorializer(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//       result *= i; //result = result * i;
//     }
//     return result;
//   }
// console.log(factorializer(7));

// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd

// Example:
// > console.log(oddOrEven(7));
// > "Odd"

// function oddOrEven(num){
//     let num2=1
//     if (num%2===0){
//        return "even"
//     } else if (num%2!==0){
//         return "odd"
//     }
// }
// console.log(oddOrEven(21));

// Exercise 4

// Return the sum of a number going back to it's root. In other words, the function will work like this:

// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36

// function addUp(sum1){
//     let result = 0
//     for (i=0 ; i<=sum1; i++){
//         result = result + i
//     }
//     return result
// }
// console.log(addUp(5))

// Exercise 5

// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false
// function isEmpty(iwill){
//     let word = " "
//     if (iwill==word){
//         return "true"
//     } else if (iwill!==word){
//         return "false"
//     }
// }
// console.log(isEmpty(" "));

// Exercise 6

// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.

// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

// function isEqualStr(str1, str2) {
//   return str1.length === str2.length;
// }

// // Test cases
// console.log(isEqualStr(" Simplon", "tennis "));
// console.log(isEqualStr("CA", "FS"));

// Exercise 7

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false

// function oneDevideByTwo(a, b){
//     if (a % b === 0){
//         return true
//     } else if (a % b !== 0){
//         return false
//     }
// }
// console.log(oneDevideByTwo(10,2))

// Exercise 8

// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

// function moodToday(mood) {
//   three = " ";
//   modd = "happy";
//   legn = mood
//   if (legn === modd) {
//     return "Today, I am feeling happy";
//   } else if (legn === three) {
//     return "Today, I am feeling neuter";
//   }
// }
// console.log(moodToday("happy"));

// Exercise 9

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false

// function match(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(match("HELLO WORLD", "hello world"));
// console.log(match("mask", "mAskinG"));

// Exercise 10

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"

// function getCase(str) {
//     if (str === str.toUpperCase()) {
//       return "upper";
//     }
//     else if (str === str.toLowerCase()) {
//       return "lower";
//     }
//     else {
//       return "mixed";
//     }
//   }
//   console.log(getCase("javascript.."));
//   console.log(getCase("SHOUT!"));
//   console.log(getCase("JaVaScRiPt"));
//   console.log(getCase("12345"));

// Exercise 11

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”
// function swapName(name) {
//     let [first, last] = name.split(" ");
//     return `${last} ${first}`;
// }

// console.log(swapName("Ada Lovelace"));
// console.log(swapName("Alan Turing"));

// Exercise 12

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”
// function AlphabetSoup(str) {
//     return str.split('').sort().join('');
// }

// console.log(AlphabetSoup("javascript"));
// console.log(AlphabetSoup("simplon"));

// Exercise 13

// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3
// function incrementOrDecrement(num5){
//     if (num5 % 2 === 0){
//         return num5+1
//     } else  if (num5 % 2 !== 0){
//         return num5-1
//     }
// }
//  console.log(incrementOrDecrement(5))
//  console.log(incrementOrDecrement(2))
// Exercise 1

// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.

// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%

// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6
// function tipAmount(bill, service) {
//   let tipPercentage;
//   if (service === "good") {
//     tipPercentage = 0.2;
//   } else if (service === "fair") {
//     tipPercentage = 0.15;
//   } else if (service === "poor") {
//     tipPercentage = 0.1;
//   } else {
//     return "Invalid service level";
//   }
//   return bill * tipPercentage;
// }
// console.log(tipAmount(100, "good"));
// console.log(tipAmount(40, "fair"));

// Exercise 2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally

// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

// function totalAmount(tip, bill){
//     if (bill === `good`){
//         return tip*1.20
//     } else if (bill === `fair`){
//         return tip*1.15
//     }
// }
// console.log(totalAmount(100, `good`));
// console.log(totalAmount(40, `fair`));

// Exercise 3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.

// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

// function splitAmount(person, servise, who){
//     if (servise === `good`){
//         return (person+person*0.2)/who
//     } else if (servise === `fair`){
//         return (person+person*0.15)/who
//     } else if (servise === `poor`){
//         return (person+person*0.1)/who
//     }
// }
// console.log(splitAmount(100, `good`, 5));
// console.log(splitAmount(100, `fair`, 2));
// console.log(splitAmount(100, `poor`, 2));

// Exercise 4

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false

// function isVowel(letter){
//     let smaller = letter.toLowerCase()
//     if (smaller === `a`){
//         return true
//     } else if (smaller === `i`){
//         return true
//     } else if (smaller === `e`){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isVowel(`a`))

// Exercise 5

// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

// function rockPaperScissors(player1, player2) {
//   if (player1 === `Rock` && player2 === `scissors`) {
//     return "player1_won";
//   } else if (player1 === `Rock` && player2 === `paper`) {
//     return "player2_won";
//   } else if (player1 === `Rock` && player2 === `Rock`) {
//     return "draw";
//   } else if (player1 === `scissors` && player2 === `scissors`) {
//     return "draw";
//   } else if (player1 === `paper` && player2 === `paper`) {
//     return "draw";
//   }
// }
// console.log(rockPaperScissors(`Rock`, `scissors`));

// Exercise 6

// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

// function numberJoinerFancy(start, end) {
//   let result = "";
//   let i = start;
//   while (i <= end) {
//     result += i; //result = result + i;
//     result += "_";
//     console.log(result);
//     console.log(i);
//     i++;
//   }
// }
// console.log(numberJoinerFancy(1, 10));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

// function numberJoinerFor(start, end) {
//   let result = "";

//   for (let i = start; i <= end; i++) {
//     if (i >= start) {
//       result += i; //result = result+i
//       result += "_"; //result = result+"_"
//     }
//   }

//   return result;
// }

// console.log(numberJoinerFor(1, 10));
// console.log(numberJoinerFor(12, 14));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

// function numberJoinerFancy(num1 , num2 , word3){
//     let result = ""
//     for(i=num1; i<=num2; i++){
//         result += i
//         result +="_"
//         result += word3
//     }
//     return result
// }
// console.log(numberJoinerFancy(1, 10, '***BANANAS***'));

// Exercise 7

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

// function reverse(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverse("skoob"));
// console.log(reverse("hello world"));
// console.log(reverse("reverse every word"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

// function findLongestWord(str) {
//   const words = str.split(" ");
//   let longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("a book full of dogs"));

// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longestWord = "";

//   for (i = 0; i <= words.length[i]; i++) {
//     if (words.length > longestWord.length) {
//       longestWord = words;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("a book full of dogs"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

// function nicer(saul) {
//   let saulgood = saul.split(" ");
//   let goodwrods = "";
//   for (let sauls of saulgood) {
//     if ("heck" !== sauls) {
//       goodwrods += sauls + " ";
//     } else if ("darn" !== sauls) {
//       goodwrods += sauls + " ";
//     } else if ("dang" !== sauls) {
//       goodwrods += sauls + " ";
//     } else if ("crappy" !== sauls) {
//       goodwrods += sauls + " ";
//     }
//   }
//   return goodwrods;
// }
// console.log(nicer("mom get the in here and bring me a sandwich."));

// Exercise 8

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

// function capitalizeAll(sentence) {
//   let str = sentence.split(" ");
//   let fixed = "";
//   for (let i = 0; i < str.length; i++) {
//     fixed += str[i].charAt(0).toUpperCase() + str[i].slice(1) + " ";
//   }
//   return fixed.trim();
// }

// console.log(capitalizeAll("every day is like sunday"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

// function split(str, delimiter) {
//   result = [];
//   currentSubstring = "";
//   for (i = 0; i < str.length; i++) {
//     if (str.slice(i, i + delimiter.length) === delimiter) {
//       result[result.length] = currentSubstring;
//       currentSubstring = ""
//       i += delimiter.length - 1;

//     } else {
//       currentSubstring += str[i];
//     }
//   }

//   if (currentSubstring !== "") {
//     result[result.length] = currentSubstring;
//   }

//   return result;
// }
// console.log(split("a-b-c", "-"));

// Exercise 9

// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

// function max(numbers) {
//   if (numbers.length === 0) {
//     return null;
//   }

//   let highest = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > highest) {
//       highest = numbers[i];
//     }
//   }
//   return highest;
// }

// console.log(max([1, 2, 3, 4, 5]));
// console.log(max([-10, -20, -3, -4]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

// function sumNumbers(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }

// console.log(sumNumbers([1, 4, 8]));
// console.log(sumNumbers([1, 3]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []

// function positives(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }

// console.log(positives([1, -3, 5, -3, 0]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

// function isEven(num) {
// if (num % 2 === 0){
//     return "even"
// } else {
//     return "odd"
// }

// }

// console.log(isEven(2));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?

//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]


// function isOdd(num) {
//   return num % 2 !== 0;
// }

// function odds(arr) {
//   return arr.filter(isOdd);
// }

// console.log(odds([1, 2, 3, 4, 5, 6]));

//Exercise

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



