// $('#btn'); //jQuery
// // VS
// document.getElementById('btn'); //without jQuery

// // jQuery.page2page.ru

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(1)').on('click', function() {
        $('.image:odd').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:even').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 1000
        );
    });
});


// jQuery устарела и сейчас нативный JS делает все то же самое, ниже список примеров 
// $ предоставляет тот же самый функционал что и querySelectorAll + forEach
// toggleClass VS .classList
// .on VS addEventListener
// $.ajax VS Fetch
// .animate() VS element.animate


// Angular

1. Node.js -> npm
2. TypeScript
3. WebPack
4. MVC (model view controler)
5. Angular

// React

1. Node.js -> npm
2. Babel
3. JSX
4. React

// Vue

1. Node.js -> npm
2. Babel
3. WebPack
4. Vue