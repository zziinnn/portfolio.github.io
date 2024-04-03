$(document).ready(function() {

    $(window).scroll( function(){
        $('.intro .wrap').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
         
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'padding-top':'80'},400);
                $(this).animate({'opacity':'1'},800);
            }
        }); 

        var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $(".header_container").css("background" , "inherit");
        }
        else{
          $(".header_container").css("background" , "#343a40");   
        }
    });
});
