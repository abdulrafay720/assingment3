// Q: 1
// How does the `map` method work in JavaScript,
// and can you provide an example of when you might use it to manipulate an array of objects?

//Answer
// In JavaScript, the map method is a higher-order function that is available for arrays.
// It is used to create a new array by applying a provided function to each element of the existing array.
// The original array remains unchanged.


// const person = [
//     {name: "rafay", age: 20},
//     {name: "ali", age: 20},
//     {name: "nasar", age: 20} 
// ]

// const names = person.map(people => people.name);

// console.log(names);


// **Map Transformation:**
// Q:1 Given an array of integers, use the `map` method to square each element and return a new array with the squared values.

// const num = [1,23,4,4,5,6,7,8,8,9];

// const square = num.map(sqr => sqr*sqr);

// console.log(square);


// **Filter Method:**
// Q: 2 Explain the purpose of the `filter` method. Provide an example where you use `filter` 
// to extract elements from an array based on a specific condition.

//Answer
// The filter method is another higher-order function available for arrays in JavaScript. 
// It is used to create a new array containing only the elements that satisfy a certain condition. The original array remains unchanged.

// const books = [
//     {authorName: "Rafay", Title: "Book1", year: 2001},
//     {authorName: "Nasar", Title: "Book2", year: 1984},
//     {authorName: "Taha", Title: "Book3", year: 1999},
//     {authorName: "Ali", Title: "Book4", year: 2005}
// ];

// const recentBooks = books.filter(function (book){
//     return book.year >= 2000;
// });
// console.log(recentBooks);





// **Filter and Map Combination:**
//Q: 2 Take an array of strings, filter out the ones with a length less than 5, and then capitalize 
// the remaining strings using the `map` method.



// const stringArr = ["rafay", "abc", "Taha" , "Ali", "qwertyu"];

// const filterArr = stringArr.filter(nameLength => nameLength.length >= 5 );

// const capital = filterArr.map(nameLength => nameLength.toUpperCase());
     
// console.log(capital);


//Q: 3 Discuss the default behavior of the `sort` method for strings and numbers. 
// How would you use a custom comparison function to sort an array of objects by a specific property?


// The sort method in JavaScript is used to sort the elements of an array. By default, the sort method sorts array elements as strings. 
// When applied to an array of numbers, this default behavior can lead to unexpected results.


// const books = [
//     {authorName: "Rafay", Title: "Book1", year: 2001},
//     {authorName: "Nasar", Title: "Book2", year: 1984},
//     {authorName: "Taha", Title: "Book3", year: 1999},
//     {authorName: "Ali", Title: "Book4", year: 2005}
// ];


// books.sort((a,b) => a.year - b.year);

// console.log(books);


// **Sorting Objects:**
// - Q: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.


// const books = [
//     {authorName: "Rafay", Title: "Book1", year: 2001, price: 200},
//     {authorName: "Nasar", Title: "Book2", year: 1984, price: 100},
//     {authorName: "Taha", Title: "Book3", year: 1999, price: 300},
//     {authorName: "Ali", Title: "Book4", year: 2005, price:400}
// ];

// books.sort((a,b) => b.price - a.price);
// console.log(books);



// Q: 4 Describe the purpose of the `reduce` method and 
// provide an example where you use it to compute a single value from an array of numbers.



// The reduce method in JavaScript is a higher-order function available for arrays.
//  It is used to iterate over an array and accumulate the values of its elements into a single result.
//  The reduce function takes a callback function and an optional initial value as parameters.



// const numbers = [2, 3, 4, 5];

// const sumOfSquares = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue ** 2;
// }, 0);

// console.log(sumOfSquares);



// **Reduce for Aggregation:**
// Q: 04 Use the `reduce` method to find the total sum of all even numbers in an array of integers.


// const arr =[1,3,5,7,9,10,20];

// const sumOfEven = arr.reduce((accumulator, currentValue) =>{
//     if(currentValue % 2 === 0){
//         return accumulator + currentValue;
//     }else{
//         return accumulator;
//     }
// },0);


// console.log(sumOfEven);




// Q: 5 How does the `find` method differ from `filter`? 
// Give an example of a scenario where using `find` is more appropriate than `filter`.

// FILTER
// filter returns an array of all elements that match the condition, and the result is an array even if only one element matches.

// FIND
// find returns the first element that matches the condition, and the result is the element itself or undefined if no match is found.


// Give an example of a scenario where using `find` is more appropriate than `filter`.

// Scnerio is to find a specific book by its title
// const scenario = "7 Habits";

// const books = [
//     {authorName: "Rafay", Title: "Mars", year: 2001, price: 200},
//     {authorName: "Nasar", Title: "Life", year: 1984, price: 100},
//     {authorName: "Taha", Title: "King", year: 1999, price: 300},
//     {authorName: "Ali", Title: "7 Habits", year: 2005, price:400}
// ];

// const findBook = books.find(title => title.Title === scenario);
// console.log(findBook);


// Q: 05 Given an array of objects with 'id' properties, use the `find` method to locate 
// an object with a specific 'id' and update its 'status' property to 'completed'.

// const tasks = [
//     { id: 1, description: 'Task 1', status: 'pending' },
//     { id: 2, description: 'Task 2', status: 'in-progress' },
//     { id: 3, description: 'Task 3', status: 'pending' },
    
//   ];
//   const taskIdToUpdate = 2;
  
//   const taskToUpdate = tasks.find(task => task.id === taskIdToUpdate);
  
//   if (taskToUpdate) {
    
//     taskToUpdate.status = 'completed';
//     console.log('Task updated successfully:', taskToUpdate);
//   } else {
//     console.log('Task not found with id:', taskIdToUpdate);
//   }
  
  
// Q: 6 Create a chain of array methods (`map`, `filter`, `reduce`, etc.) 
// to transform an array of strings into a single concatenated string with a specific condition.


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumNumbers = numbers
//   .map(number => number * 2)       
//   .filter(doubledNumber => doubledNumber % 2 == 0)  
//   .reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // Sum the odd numbers

// console.log(sumNumbers);






// Q: 06 Create a chain of array methods to find the average of all positive numbers 
// in an array of mixed integers and return the result rounded to two decimal places.


// const mixedNumbers = [5, -2, 8, -1, 3, 0, -4, 7,2,3,4];

// const averageOfPositiveNumbers = mixedNumbers
//   .filter(number => number > 0)                    
//   .reduce((sum, positiveNumber, index, array) => {
//     sum += positiveNumber;
//     if (index === array.length - 1) {
//       return sum / array.length;                   
//     } else {
//       return sum;
//     }
//   }, 0)
//   .toFixed(2);                                      

// console.log(averageOfPositiveNumbers);




//Q: 7 Explain the concept of callback functions in the context of array methods. 
// Provide an example of using a callback function with the `map` method.


// In JavaScript, callback functions play a crucial role in enabling the use of higher-order functions,
//  especially when working with array methods. A callback function is simply a function that is passed 
//  as an argument to another function, and it gets executed at some point during the execution of that outer function.

// const names = ['Rafay', 'Ali', 'TAHA'];

// const uppercaseNames = names.map(function (name) {
//   return name.toUpperCase();
// });

// console.log(uppercaseNames);



//Q: 07 Implement a function that takes an array of objects with 'age' properties 
// and returns an array of those who are adults (age 18 and above) using the `filter` method.


// function getAdults(persons) {
//     const adults = persons.filter(person => person.age >= 18);
//     return adults;
//   }
  
//   const people = [
//     { name: 'Rafay', age: 25 },
//     { name: 'Ali', age: 16 },
//     { name: 'Nasar', age: 30 },
//     { name: 'Taha', age: 17 }
//   ];
  
//   const adultsArray = getAdults(people);
//   console.log(adultsArray);


//Q: 8  How would you handle potential errors when using array methods like `find` or `reduce`? 
// Provide an example of error handling in such a scenario.

// const array = [1, 2, ,3,4, 4, 5];

// try {
//   const result = array.find(element => {
//     if (element === 3) {
//       throw new Error("Element not found");
//     }
//     return element === 4;
//   });

//   console.log("Result:", result);
// } catch (error) {
//   console.error("Error:", error.message);
// }


// Q: 08 Sort an array of strings based on their lengths in ascending order. 
// If two strings have the same length, maintain their relative order in the sorted array.


// const array = ["apple", "banana", "kiwi", "orange", "pear", "grape"];

// const customCompare = (a, b) => {
//   const lengthComparison = a.length - b.length;

//   return lengthComparison === 0 ? array.indexOf(a) - array.indexOf(b) : lengthComparison;
// };

// const sortedArray = array.sort(customCompare);

// console.log("Sorted Array:", sortedArray);



//Q: 9 Discuss the importance of immutability when working with array methods.
//  Demonstrate how you would perform immutable operations using methods like `map` or `filter`


//  Immutability is an important concept in programming that refers to the idea of not modifying the original data structures.
//  Instead of changing the existing data in-place, you create and return a new copy with the desired modifications.
//  This approach has several benefits, including easier debugging, better code maintainability, and enhanced predictability.



// const originalArray = [1, 2, 3, 4, 5];

// const newArray = originalArray.map((num) => num ** 2);

// console.log("New Array (immutable):", newArray);





//Q: 09  Given an array of arrays containing numbers, use a combination of array methods
//  to flatten the structure and then calculate the sum of all the numbers.


// const arrayOfArrays = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8],
// ];

// const sum = arrayOfArrays
//   .flat() 
//   .reduce((acc, num) => acc + num, 0);

// console.log("Flattened Array:", arrayOfArrays.flat());
// console.log("Sum of All Numbers:", sum);









// Q: 10 Compare the performance implications of using `map` versus `forEach`. 
// In what scenarios would you prefer one over the other, and why?

// map is used to transform each element of an array and create a new array with the results, emphasizing immutability.

// forEach is used for side effects, such as iterating over elements for actions like logging or updating variables outside the loop.

// Use map when you want a transformed array, and forEach when you need to iterate solely for side effects.
//  In performance-sensitive scenarios where a new array is not needed, forEach might be marginally faster, 
//  but readability and code intent are often more crucial considerations.











//Q: 10
// Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead


// const array = [
//   { id: 1, name: "rafay" },
//   { id: 2, name: "Taha" },
//   { id: 3, name: "Ali" },
// ];

// const defaultObject = { id: -1, name: "Not Found" };

// const findResult = array.find((element) => element.id === 2) || defaultObject;

// console.log("Result:", findResult);











