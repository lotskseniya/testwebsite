sign = document.getElementById("signin")
popup = document.getElementById("popup")
sign.addEventListener('click',function (){
    popup.classList.add("active_popup")
})
var close = document.querySelector(".popup_close_btn")
close.addEventListener('click', function (){
    popup.classList.remove("active_popup")
});

$('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slide: 'div',

    
    responsive: [
        {
          breakpoint: 520,
    
            settings: {
                slidesToShow: 1,
               }
          
        },
    ]
  });  



 

