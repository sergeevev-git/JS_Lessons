class User { // ES6 standart
    constructor(name, id) {//конструктор
       this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() { //метод класса     
        console.log(`Hello ${this.name}`)
    }
    exit() { //метод класса     
        console.log(`Пользователь ${this.name} ушел`)
    }
}

let Ivan = new User('Ivan', 25),
    Alex = new User('Alex', 20);

console.log(Ivan);
console.log(Alex);
Alex.hello();
Ivan.exit();