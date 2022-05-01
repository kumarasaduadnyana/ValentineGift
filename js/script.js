$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.gallery').offset().top - 100){
        $('.gallery .thumbnail').addClass('muncul');
    }
})