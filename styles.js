$(document).ready(function(){
    
/*******************FancyBox******************/
    $('[data-fancybox="gallery"]').fancybox();

/**********************Nice Scroll******************/
   $("html").niceScroll();

/*********************Video Popup********************/
    $("#video").videoPopup({
        autoplay: 1,
        controlsColor: 'white',
        showVideoInformations: 0,
        width: 1000
    })
     $("#video2").videoPopup({
        autoplay: 1,
        controlsColor: 'white',
        showVideoInformations: 0,
        width: 1000
    })
    
/********************************Curosal ********************************/
  /*  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) */
/*********************Portolio Section ***************************/
    $(".button-group button").click(function(){
        $(this).addClass("active-btn").siblings().removeClass("active-btn");
        var selectedFilter = $(this).data('filter');
        console.log(selectedFilter);
        $(".showall").fadeOut();
         setTimeout(function(){
        
        $(".images").contents().filter("."+selectedFilter).fadeIn();
        
        },400)
    })

/*********************************Portfolio Section***********************/
    $("section.choose ul li").click(function(){
         $(this).addClass("active-btn").siblings().removeClass("active-btn");
        var selectedFilter = $(this).data("filter");
            $(".choose-info .showall").fadeOut();

        setTimeout(function(){
        
            $("."+selectedFilter).fadeIn();
        
        },400)
    })
    
/************************* Wow Plugin Using Css animate *************************/
      new WOW().init();
})        

