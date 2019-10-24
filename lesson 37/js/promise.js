let drink = 1;

function shoot() {
    console.log('Вы сделали выстрел');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись!');
        }, 3000);
    });
    return promise;
};

function win() {
    console.log('вы победили');
    (drink == 1) ? BuyBeer() : GetMoney()
}

function BuyBeer() {
    console.log('вам купили пиво');
}

function GetMoney() {
    console.log('вам заплатили');
}

function loose() {
    console.log('вы проиграли');
}

shoot()
    .then(() => console.log('вы попали'))
    .then(win)
    .catch(loose)
