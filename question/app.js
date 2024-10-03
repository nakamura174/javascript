// Q1
let nickname = 'なかむー';
let age = 24;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let JavaScript = languages[0];
let Python = languages[3];
let templateText = `私の好きな言語は${JavaScript}です。次は${Python}を勉強してみたいです。`;

console.log(templateText);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5
let averageAge = playerList[0].age + playerList[1].age + playerList[2].age;
console.log(averageAge / playerList.length);

// Q6
function sayHello() {
  console.log('Hello');
}

sayHello();

const sayWorld = function() {
  console.log('Wold');
}

sayWorld();

// Q7
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello');
}

user.sayHello();

// Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
}

calc.add(2, 5);

calc.subtract = function(x, y) {
  console.log(x - y);
}

calc.subtract(15, 5);

calc.multiply = function(x, y) {
  console.log(x * y);
}

calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
}

calc.divide(10, 2);

// Q9
function remainder(x, y) {
  return x % y;
}

console.log('5 を 3 で割った余りは' + remainder(5, 3) + 'です。');

// Q10
// 変数xはローカル変数であるため。
// 変数にはスコープと呼ばれる有効範囲が決められており、
// 関数内で定義した変数は関数内からは参照可能だが、関数外から変数を参照することはできない。

// ----------------応用編----------------
// Q1
let floor = Math.floor(Math.random() * (9 + 1));
console.log(floor);

// Q2
function sayHello() {
  console.log('Hello World!');
}
setTimeout(sayHello, 3000);

// Q3
let num = -1;
  if (num > 0) {
    console.log('num is greater than 0');
  } else if (num < 0) {
    console.log('num is less than 0');
  } else if (num === 0) {
    console.log('num is 0');
  }

// Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}

console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
let sum = 0;

for (let i = 0, sum = mixed.length; i < sum; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}