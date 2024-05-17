// 1 Question Write a script to log "Hello, World!" to the console.
let message: string = "Hello, World!";
console.log(message);
// 2 Question Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature: number = 15;
if (temperature < 20) {
  console.log("It's cold!");
}
// 3 Quesition Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.

let apples: number = 10;
apples -= 3; 
console.log(apples); 

// 4 Question Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstName: string = "Raza";
let lastName: string = "Raza";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);

// 5. Quesition Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let number: number = 5;
console.log(number > 3 ? "Yes" : "No");

// 6 Question Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
  }

// 7 Question Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }

//   8 Question Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let temperatures: number[] = [23, 13, 29, 21, 19];
let highest: number = temperatures[0];
for (let temp of temperatures) {
  if (temp > highest) highest = temp;
}
console.log(highest);

// 9 Qusetion Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
// let age = parseInt(prompt("Enter your age:"));
// console.log(age < 18 ? "Minor" : "Adult");

// 10 Question Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function countPositives(numbers: number[]): number {
    return numbers.filter((num) => num > 0).length;
  }

// 11 Quesion Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function filterWords(words: string[]): string[] {
    return words.filter((word) => word.startsWith("a"));
  }

// 12 Question Create a script that logs the second to last element of an array named fruits.
let fruits: string[] = ["apple", "banana", "cherry", "date"];
console.log(fruits[fruits.length - 2]);

// 13 Question Develop a function that takes an array of numbers and returns a new array with each number squared.
function squareNumbers(numbers: number[]): number[] {
    return numbers.map((num) => num * num);
  }

// 14 Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(elements: any[]): any[] {
    let reversed: any[] = [];
    for (let i = elements.length - 1; i >= 0; i--) {
      reversed.push(elements[i]);
    }
    console.log(reversed);
    return reversed;
  }

// 15 Question Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
function logScoreChanges(scores: number[]): void {
    let max = scores[0];
    let min = scores[0];
    let maxChanges = 0;
    let minChanges = 0;
    scores.forEach((score) => {
      if (score > max) {
        max = score;
        maxChanges++;
      }
      if (score < min) {
        min = score;
        minChanges++;
      }
    });
    console.log(
      `Max score changes: ${maxChanges}, Min score changes: ${minChanges}`
    );
  }
// 16 Question Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
function removeFalsey(values: any[]): any[] {
    return values.filter(Boolean);
  }

// 17 Question Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];

// 18 Question Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter
function sumOfElements(numbers: number[], type: "even" | "odd"): number {
    return numbers
      .filter((num) => (type === "even" ? num % 2 === 0 : num % 2 !== 0))
      .reduce((acc, curr) => acc + curr, 0);
  }

//   19 Question Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function elementExists(elements: any[], element: any): number {
    return elements.indexOf(element);
  }
//   20 Question Write a function to find and return the smallest number in an array of integers.
function findSmallest(numbers: number[]): number {
    return Math.min(...numbers);
  }
//   21 Question Write a function calculateProduct that takes an array of numbers and returns the product of all elements
function calculateProduct(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc * num, 1);
  }
//   22 Question Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function filterByLength(strings: string[], minLength: number): string[] {
    return strings.filter((s) => s.length > minLength);
  }
//   23 Question Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(items: any[]): any[] {
    const seen = new Set();
    const duplicates = new Set();
    items.forEach((item) => {
      if (seen.has(item)) duplicates.add(item);
      seen.add(item);
    });
    return Array.from(duplicates);
  }
//   24 Question Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(numbers: number[]): number[] {
    return numbers.map((num) => num + 1);
  }
//   25 Question Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(elements: any[], target: any): number {
    return elements.filter((e) => e === target).length;
  }
//   26 Question Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(numbers: number[]): boolean {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i - 1] > numbers[i]) return false;
    }
    return true;
  }
//   27 Question Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names: string[]): string {
    if (names.length < 2) return names.join("");
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
  }
//   28 Question Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function convertToFahrenheit(temperatures: number[]): number[] {
    return temperatures.map((temp) => ((temp - 32) * 5) / 9);
  }
//   29 Question Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(numbers: number[]): {
    min: number;
    max: number;
    average: number;
  } {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average =
      numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
    return { min, max, average };
  }
//   30 Quesiton Create a function swapElements that swaps two specified indices in an array.
function swapElements<T>(
    elements: T[],
    index1: number,
    index2: number
  ): T[] {
    let temp = elements[index1];
    elements[index1] = elements[index2];
    elements[index2] = temp;
    return elements;
  }

