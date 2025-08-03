// Task 1
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// for (let i = 0; i < styles.length; i++) {
//   if (styles[i] === 'blues') {
//     styles[i] = 'classic';
//   }
// }

// function logItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i+1} - ${arr[i]}`);
//   }
// }

// logItems(styles);


// // Task 2
// const logins = ["Peter", "John", "Igor", "Sasha"]
// function checkLogin(arr) {
//   const userName = prompt('Enter your name', '');
//   if (userName && logins.includes(userName)) {
//     alert(`Welcome, ${userName}!`);
//   } else {
//     alert('User not found');
//   }
// }

// checkLogin(logins);


// // Task 3

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const item of args) {
//     if (typeof item === 'number' && !isNaN(item)) {
//       sum += item;
//       count += 1;
//     }
//   }
//   if (count === 0) {
//     return 0;
//   }
//   return sum / count;
// }

// console.log(caclculateAverage(1, 5, 10, 15));


// // Task 4

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function calculateNeighbor(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length-1; i++) {
//     newArr.push(arr[i] + arr[i+1]);
//   }
//   return newArr;
// }

// const testNewArr = calculateNeighbor(someArr);
// console.log(testNewArr);


// Task 5

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 0];
function findSmallestNumber(numbers) {
  if (Array.isArray(numbers)) {
    const cleanArr = numbers.filter(x => typeof x === "number");
    return Math.min(...cleanArr);
  } else {
    return 'Sory, it is not an array!';
  }
}

const minNum = findSmallestNumber(numbers);
console.log(minNum);

// Task 6
function findLongestWord(string) {
  const array = string.split(' ');
  let longestWord = '';
  for (const word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("London is the capital of Great Britain"))

// Task 10
const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let total = 0;
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      total += fruit.quantity * fruit.price;
    }
  }
  return total;
}

console.log(calcTotalPrice(fruits, 'Банан'));
