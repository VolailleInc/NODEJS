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

//the find method
/*Find the first user with the name 'John' */

const findUser = users.find((user) => user.name === "John");
/* Explanation
1. Similar to filter. Except will return the first item that
matches the condition and the loop will be stopped
2. If no item is matched, then undefined will be returned
*/

//findIndex method
/*
Find the index of the first user with the name 'John'
*/
const indexFinder = users.findIndex((user) => user.name === "Jane");

/*
Explanation

1. Similar to filter, except it will return the index that 
matches the condition and terminates the loop.
*/

//some method
// Check if there is any user with the name 'Mike'
const someUser = users.some((user) => user.name === "Mike");
/*
Explanation
1. It will check if any item matches the condition
2. Return value is boolean
*/

//The every method
//Check if all users are adult
const everyUser = users.every((user) => user.name >= 18);
/*
Explanation
1. Similar to some. But it will run the condition on every
loop. If any item doesn't match the condition, then loop will 
be stopped.
2. Return value is boolean
*/

//sort
//Sort the users by their age.
const sortUsers = user.sort((a, b) => a.age - b.age); //Sort ascending
const sortUsersDesc = users.sort((a, b) => b.age - a.age);//Descending order
//Explanation
/*
1. The arrangement of any two values in a list pass through a comparison functionWhen, which simply find their difference. The results of the returned value is either (negative, zero, positive). Sorting is done between the two list based on the results. If the results is negative, a is sorted before b. If the results is positive b is sorted before a. If the results is 0 no changes are done with the sort order of the two values.
*/

//the splice method

users.splice(2,0,{name:'Jenny',age:45})//add new user at index
const removeUsers=users.splice(2,1)//remove user at index 2 and return it.

/*
Explanation:

splice method is really helpful. You can add or remove items at any index.
At the first argument we have to pass the index from where we want to do operations.
2nd argument is for how many items you want to remove from the array.
Then you can pass as many arguments as you want. They will be added to the given index.
If you remove any item, then it will be removed from the function as an array.
These are the top 10 array methods you should know. Now it is time for bonus methods.
*/

// the slice method

const sliceUser=users.slice(2,5)// slice

/*
Explanation:

slice method returns a portion of the array.
The First argument is the starting index. The last argument is for the ending index. But it will include that index item.
For instance, if we pass 2 and 5 then the return array will include [2,3,4].
*/

//The concat method
const concatUsers = users.concat([{ name: 'Jenny', age: 45 }])
/*
Explanation:

concat method joins two or more arrays.
It will create and return a new array.
*/
