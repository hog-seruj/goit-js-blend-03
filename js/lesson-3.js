// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
 { id: 1, values: [1, 2, 3] },
 { id: 2, values: [4, 5, 6] },
 { id: 3, values: [7, 8, 9] },
];

const newData = data.flatMap((item) => item.values);

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

const peopleNew = people.some((item) => item.age < 20);


// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

const evenNumbers = numbers.every((number) => number % 2 === 0);


// Знайдіть перше непарне число

const numbers2 = [2, 1, 6, 8, 9, 10, 12];

const firstOdd = numbers2.find((number) => number % 2 === 1);


// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const newArr = numbersArray.toSorted((a, b) => a - b);

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortedText = stringArray.toSorted((a, b) => a.localeCompare(b));


//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

const newUsers = users.toSorted((a, b) => a.name.localeCompare(b.name));
const newUsersAge = users.toSorted((a, b) => a.age - b.age);


// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
]

const adultUsers = user.filter((item) => item.age > 20);

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers3 = [1, 2, 3, 4, 5];

const count = numbers3.reduce((acc, number) => (acc += number), 0);

class Calculator {
  number(value) {
    this.value = value;
    return this;
  }
  getResult() {
    return this.value;
  }
  add(value) {
    this.value += value;
    return this;
  }
  subtract(value) {
    this.value -= value;
    return this;
  }
  divide(value) {
    if (this.value === 0) {
      console.log(`You can't devide!`);
    } else {
      this.value = this.value / value;
    }
    return this;
  }
  multiply(value) {
    this.value = this.value * value;
    return this;
  }
}

const calc = new Calculator();
const result = calc
  .number(10)   // Встановлюємо початкове значення 10
  .add(5)       // Додаємо 5 (10 + 5 = 15)
  .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4)  // Множимо на 4 (12 * 4 = 48)
  .divide(2)    // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24


  console.log(result); // 24
