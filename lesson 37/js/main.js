let drink = 0;

function shoot (arrow, headshot, fail) {
    console.log('Вы сделали выстрел');

    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись!');
    }, 3000)
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

shoot({},
    function(mark) {
        console.log('вы попали в цель');
        win(mark, BuyBeer, GetMoney);
    },
    function(miss) {
        console.error(miss);
        loose();
    }
);
