
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    resolve(request.response);
                }
                //let data = JSON.parse(request.response);
                //inputUsd.value = inputRub.value / data.usd;
            } else {
                //inputUsd.value = "Что-то пошло не так!";
                reject();
            }
        });
    });
    promise.then((a) => {
        let data = JSON.parse(a);
        inputUsd.value = inputRub.value / data.usd;
    });
    promise.catch(() => inputUsd.value = "Что-то пошло не так!");
});