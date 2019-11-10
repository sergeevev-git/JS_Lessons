$(document).ready(function() {
    
    // console.log('ready');
    
    function showModal() {
        $('.overlay').fadeIn('slow', function () {
            $('.modal').slideDown('slow', function() {
              });
        });
    }
    
    $('.close').on('click', function () {
        $('.modal').slideUp('slow', function() {
            $('.overlay').fadeOut('slow', function () {
              });
        });
    });

    $('.main_btna, .main_btn, li:contains("расписания туров")').on('click', function() {
        showModal();
    });
    // $('.main_btn').on('click', function() {
    //     showModal();
    // });
    // $('li:contains("расписания туров")').on('click', function() {
    //     showModal();
    // });
});