$(function(){
    "use strict";


    //Trigger niceScroll 
    $('html').niceScroll({
        cursorcolor: "#f70ea9",
        cursorborder: "none",
        cursorwidth:"24px",
    
    });


    //header height
    $('.header').height($(window).height());



    // $('.header').css('paddingTop' , ($(window).height() - $('.intro').height()) /2);


    //scroll to features
    $('.header .intro .arrow i').click(function(){
        $('html , body').animate({
            scrollTop: $('.features').offset().top
        },1000);
    });


    //when hire us btn click 
    $('.header .intro .btns .hire').click(function(){
        $('html , body').animate({
            scrollTop: $('.our_team').offset().top
        },1000);
    });

     //when our work btn click 
     $('.header .intro .btns .work').click(function(){
        $('html , body').animate({
            scrollTop: $('.our_work').offset().top
        },1000);
    });

    //see more button on our work to show more iamge
    $('.btn_seemore').click(function(){

        $('.our_work .hidden').fadeIn(2000);
    });


    //slider of clients

    var rightArrow = $('.testim .fa-chevron-right'),
        leftArrow = $('.testim .fa-chevron-left');

        function checkarrrows(){
         $('.slider:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
         $('.slider:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

        }

        checkarrrows();

        $('.testim i').click(function () {

            if ($(this).hasClass('fa-chevron-right')) {

                $('.testim .active').fadeOut(100 , function () {

                    $(this).removeClass('active').next('.slider').addClass('active').fadeIn();
                     checkarrrows();

                });
                
            }else {
                $('.testim .active').fadeOut(100 , function () {

                    $(this).removeClass('active').prev('.slider').addClass('active').fadeIn();
                     checkarrrows();

                });
            }       
        
        
        });


});