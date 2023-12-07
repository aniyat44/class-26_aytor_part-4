$(function(){

    $('.hero_slider').slick({
        arrows: false,
        autoplay: true,
        fade:true,
        speed:1000,
        dots: true,
        appendDots: $(".slider_dots"),
        dotsClass: "hero_slider_dots"
    });

    // search section start ==================
    
    $('.search_open_btn').on('click', ()=>{
        $('#search').addClass('open');
    });
    $('.search_close_btn').on('click', ()=>{
        $('#search').removeClass('open');
    })

    // search section end ==================
    
    // Cart section start ==================
    
    $('.cart_open_btn').on('click', ()=>{
        $('#cart').addClass('open');
    })
    $('.cart_close_btn').on('click', ()=>{
        $('#cart').removeClass('open');
    })

    // Cart section end ==================
    
    // Popup section start ==================
    
    $('.popup_close_btn').on("click", ()=>{
        $('#popup').addClass('open')
    })

    // Popup section end ==================
});