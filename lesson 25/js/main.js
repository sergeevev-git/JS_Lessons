let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.scrollHeight;

    console.log(width);
    console.log(height);
    console.log(box.getBoundingClientRect()); //координаты элемента
    console.log(box.getBoundingClientRect().left);

    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);

btn.addEventListener('click', function() {
    //box.style.height = box.scrollHeight + 'px';
    //console.log(box.scrollTop);
    box.scrollTop = 0; //так работает кнопка "ВВЕРХ" на страницах?
});


//scrollBy(0, 200); мотает экран на 200 единиц вниз и на 0 в бок

//scrollTo(0,100); мотает на заданные коор-ты