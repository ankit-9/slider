jQuery.fn.extend({
    startSlider : function(){
      var that = this;
      var imgSelecter = $(that).find("img");
      var textSelecter = $(that).find(".slider-text");
      var currentIndex = 0;
      var lastIndex = (imgSelecter.length - 1);
      var slideInterval = $(that).data('slidechange-interval');
      var animationInterval = $(that).data('animation-interval');

      loop = setInterval(function () {
        currentSlide = currentIndex;
        nextSlide = currentIndex + 1;
        currentIndex++;

        // call animation function
        that.slideAnimateLeft(imgSelecter,currentSlide,nextSlide,animationInterval);
        that.slideAnimateRight(textSelecter,currentSlide,nextSlide,animationInterval);

         if(currentIndex >= lastIndex){ // check index.length
          clearInterval(loop); // break setInterval
          // reset slide img and text index
          currentIndex = 0;
          imgSelecter.eq(currentIndex).addClass("next");
          textSelecter.eq(currentIndex).addClass("next");
          setTimeout(function(){
            that.slideAnimateLeft(imgSelecter,nextSlide,currentIndex,animationInterval);
            that.slideAnimateRight(textSelecter,nextSlide,currentIndex,animationInterval);
            setTimeout(function(){that.startSlider();},animationInterval);
          },slideInterval); // end setTimeout
        } // end if
      }, slideInterval); // end setInterval
    },
    slideAnimateLeft : function(select,current,next,interval){
         // change class
        select.removeClass("active");
        select.eq(current).addClass("active");
        select.eq(next).addClass("next");

        // animation
        select.eq(current).animate({left:400},interval,function(){
            select.eq(current).removeClass("active").removeAttr("style");
        });
        select.eq(next).animate({left:0},interval,function(){
          select.eq(next).removeClass("next").addClass("active").removeAttr("style");
        });
    },
    slideAnimateRight : function(select,current,next,interval){
         // change class
        select.removeClass("active");
        select.eq(current).addClass("active");
        select.eq(next).addClass("next");

        // animation
        select.eq(current).animate({right:400},interval,function(){
            select.eq(current).removeClass("active").removeAttr("style");
        });
        select.eq(next).animate({right:0},interval,function(){
          select.eq(next).removeClass("next").addClass("active").removeAttr("style");
        });
    }
});
