localStorage.setItem('number',1);

console.log(localStorage.getItem('number'));

localStorage.removeItem('number');

localStorage.clear(); //чистит всё хранилище 

// в лекции немного работают с изменением формы, исходников, как обычно, не приложили

let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) { //например если нет какихто данных - user.name, то сделали свое описание ошибки и она выводится в консоль
        throw new Error('нет имени объекта')
    }
} catch(e) {
    console.log(e.name); //свойства объекта ошибки
    console.log(e.message);
    console.log(e.stack);

    console.log(`there is error: ${e.name}`);
} finally { //finally отработает всегда 
    console.log('aasdasdasdasd')
}