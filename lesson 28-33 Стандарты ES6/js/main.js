//стандарты ES6
//Интерполяция
let name = 'Ivan',
    age = 30,
    mail = 'aaa@mail.ru';

//document.write('User ' + name + " age - "+ age + ' mail:' + mail); //обычный способ

document.write(`User ${name} age ${age} mail: ${mail}`); //а это ES6 - Интерполяция

//let и const
//при использовании let и const в цикле переменные создаются при каждой итерации.
function makeArray() {
    var items = [];

    for (let i=0; i<10; i++) {
        var item = function () {
            console.log(i);
        }
        items.push(item);
    }
    return items;
}
var arr = makeArray();
arr[1]();
arr[4]();
arr[7]();

//стрелочные функции
//особенность стрелочной  - 1. она анонимна, ей не присваивается имя, она только присваивается переменной и не имеет своего контекста вызова
//2 - мы не моежм управлять обработчиками событий и не сможем вызвать саму себя(нет рекурсии)
let fun = (a, b) => {
    console.log(this);
};
fun();
//т.к. стрелочная функция не имеет своего контекста, то здесь this ссылается(берет у родителя) на сам объект, а не на функцию sayNaumer
let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();       
    }
};
obj.sayNumber();
//Аналогично, получим сам элемент
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    }
    show();
});

//Параметры по умолчанию
//пример: при передаче аргументов нет параметра basis, то было бы хорошо, чтобы было некое значения по-умолчанию(в нашем примере - 2)
function calc0rDouble(numbar, basis = 2) {
    //basis = basis || 2; //ES5 - раньше проггеры делали так: если переменной basis нет, то в basis присваивалось 2
    //в ES6 задание значения по-умолчанию происходит при объявлении функции
    console.log(numbar*basis);

}
calc0rDouble(6); //12
calc0rDouble(6,3); //18

//классы в ES6
class Rectangle {
    constructor(heigth, width = 20) { //в конструкторе так же можно задать параметры по умолчанию
        this.heigth = heigth;
        this.width = width;
    }
    calcArea() {
        return this.heigth*this.width;
    }
}
const square = new Rectangle(5, 5);
const square2 = new Rectangle(5);
console.log(square.calcArea());
console.log(square2.calcArea());


//SPREAD-операторы
let video = ['youtube','vimeo','rutube'],
    blog = ['wordpress','lj','blogger'],
    internet = [video, blog,'vk','fb']; //обычный вывод
    internet = [...video, ...blog,'vk','fb']; //spread-оператор развернет подмассивы в обычный элемент массива internet

console.log(internet); 

function log(a,b,c) {
    console.log(a); 
    console.log(b); 
    console.log(c); 
    console.log(a + b + c); 
}

let number = [2, 3, 5];
log(number); //выведет только console.log(a) с массивом number внутри, а console.log(b) и console.log() будут undefined
log(...number); //спроецирует каждый элемент массива в свою переменную по-порядку()