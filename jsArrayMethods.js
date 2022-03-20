//Consider the following data set of users

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Mike", age: 35 },
  { name: "Jill", age: 32 },
  { name: "Jack", age: 40 },
  { name: "Alice", age: 45 },
  { name: "Julie", age: 35 },
  { name: "Jane", age: 20 },
  { name: "Liz", age: 25 },
];

//forEach Method
/*If you were asked to print all the user names, how would you do that? 
You will most probably use the for..loop like so*/

for (let i = 0; i < users.length; i++) {
  const name = users[i].name;
  console.log(name);
}

/*Using forEach function */
users.forEach((user) => {
  console.log(user.name);
});

//Or much better way
users.forEach((user) => console.log(user.name));

//Explanation
/*
 * The forEach method will run a loop over the array
 * The callback function will be called on every single loop.
 * And the current array item, index, and the array itself will
 * be passed as an argument.
 */

//This is how it works under the hood

const callback = (item, index, array) => console.log(item);

for (let i = 0; i < users.length; i++) {
  const item = users[i];

  callback(item, i, users);
}

//The map Method
/*Let us create an array of all user names and ages */

const names = users.map((user) => user.name);
const ages = users.map((user) => user.age);

//Explanation
/*
1. map function creates a new array
2. Then loops over like the forEach method but returns 
something from the function on each loop
3. The results of the function on each item in thea array 
is pushed to that array. In our case, it was name and age. 
Then the array is returned
*/
//The filter method
/* Lets extract users with age more than or equal to 30 */

const thirtyOrOver = users.filter((user) => user.age >= 30);

//Explanation
/*
1. filter method works like map except it returns a condition 
with truthy value and run the condition on every item of the array.
2. If the condition holds true for any item, it pushes the item 
into a new array.
3. The newly formed array will be returned
*/

//Array Method Chaining
/*
We can chain methods one after another in one line. Assuming we want
get the name of users over 30 years.
*/
//Normal Approach
const thirtyOrOver1 = users.filter((user) => user.age >= 30);
const names1 = thirtyOrOver1.map((user) => user.name);

//With method chaining
const overOr30Names = users.filter(user.age >= 30).map((user) => user.name);

//NB: Warning
/* Method chaining is not efficient when you are handling large input data.
Looping over large data set in chains slows down your program. Use the method 
below instead
*/
//Assume below as large data set array
const over30Names = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Mike", age: 35 },
  { name: "Jill", age: 32 },
  { name: "Jack", age: 40 },
  { name: "Alice", age: 45 },
  { name: "Julie", age: 35 },
  { name: "Jane", age: 20 },
  { name: "Liz", age: 25 },
];
users.forEach((user) => {
  if (user.age >= 30) over30Names.push(user.name);
});

//The reduce method
/* Assuming we want to get the total age of all users */
//Using the forEach method
let totalAge = 0;
users.forEach((user) => {
  totalAge += user.age;
});

//using the reduced method
const totalAge1 = users.reduce((total, user) => total + user.age, 0);

//Explanation
/*
1. reduce method takes two argument
* callback function, and
* initialValue
2. In the callback function, total is the first argument. When reduce
will run the first time total value would be the initial value
3. THen you have to return something from the callback. What is 
returned will be passed as the value (total) for the next loop 
until the iteration is finished.
4. The total (value) will be returned by the reduce method in the  
last loop. 
*/
//How reduce work under the hood

const callback2 = (total, item) => total + item.age;
let total = 0;

for (let i = 0; i < users.length; i++) {
  total += callback2(total, users[i]);
}
