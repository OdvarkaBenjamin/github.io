(function($) {
   $(function(){
      $(".jq--scroll-fotogalerie").click(function(){
          $("html, body").animate({scrollTop: $(".jq--fotogalerie").offset().top-70}, 500);
      });
       
       
       
       



      $(".jq--scroll-onas").click(function(){
          $("html, body").animate({scrollTop: $(".jq--onas").offset().top-100}, 500);
      });
       
       
       
       
       

      $(".jq--scroll-index").click(function(){
          $("html, body").animate({scrollTop: $(".jq--index").offset().top-140}, 500);
      });
       

       

/* Mobile navigation */
       $(".jq--nav-icon").click(function(){
           
          $(".nav-background").fadeToggle();
          $(".mobile-nav-back").fadeToggle();
           $("nav ul").fadeToggle();  
       });
       
       
       $(".jq--image-hamburger").click(function(){
           if($(".jq--image-hamburger").attr("src") == "img/ham.png")
           $( $(".jq--image-hamburger").attr("src", "img/ham.png"));  
           else
               {
                    $( $(".jq--image-hamburger").attr("src", "img/ham.png"));  
               }
               
       })
   });
})(jQuery);
    
