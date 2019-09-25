// function User(name, id) { //функция-конструктор
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     this.hello = function() { //метод класса
//         console.log('Hello ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log("Пользователь " + this.name + ' ушел');
// }

// let Ivan = new User('Ivan', 25),
//     Alex = new User('Alex', 20);

// console.log(Ivan);
// console.log(Alex);
// Alex.hello();
// Ivan.exit();
//================================================================
//'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(2, 5);
//================================================================
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();
//================================================================

// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'AAA')); //методом CALL можно передать только строку
// console.log(sayName.apply(user, ['BBB'])); //методом APPLY можно передать массив данных

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2); //привязывает 2(this) к функции COUNT
// console.log(double(4));
// console.log(double(13));

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
})

//================================================================
//Способоы вызова функции
//1) просто вызов функции - window/undefined
//2) метод объекта - this = объект
//3) конструктор(new) - this = новый созданный объект
//4) указание конкретного контекста - call/apply/bind
