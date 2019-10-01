// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.stringify(options));
// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, username, password);
    request.open('GET', 'JSON/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //request.send(body); это когда мы чтото передаем на сервак
    request.send();

    //status - код ответа сервера (404....)
    //statusText - сообщения ответа сервера (Page not found...)
    //responseText /respons
    //readyState - текущее состояние запроса(0-4) описание каждого на MDN

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    })
})