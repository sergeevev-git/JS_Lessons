let num = 1;


//анонимная самовызывающаяся функция
(function() {
    let num = 2;
    console.log(num)

    return console.log(num + 3);
}
()
)

console.log(num);


//еще ордин метод - использование объектного интерфейса: моудль записывается в перенмен6ную и в нем возвращемся мектоды, доступные снаружи


let user  = (function() {
    let privat = function() {
        console.log('I am privat')
    }

    let  sayHello = function() {
        console.log('Hello')
    }

    return {
        sayHello : sayHello
        }
}());

console.log(user);
console.log(user.sayHello());