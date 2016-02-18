jQuery.fn.extend({
    start_slider : function(){
      var that = this;
      var img_selecter = $(that).find("img");
      var text_selecter = $(that).find(".slider-text");
      var current_index = 0;
      var last_index = (img_selecter.length - 1);
      var slide_interval = $(that).data('slidechange-interval');
      var animation_interval = $(that).data('animation-interval');

      loop = setInterval(function () {
        current_slide = current_index;
        next_slide = current_index + 1;
        current_index++;

        // call animation function
        that.slide_animate_left(img_selecter,current_slide,next_slide,animation_interval);
        that.slide_animate_right(text_selecter,current_slide,next_slide,animation_interval);

         if(current_index >= last_index){ // check index.length
          clearInterval(loop); // break setInterval
          // reset slide img and text index
          current_index = 0;
          img_selecter.eq(current_index).addClass("next");
          text_selecter.eq(current_index).addClass("next");
          setTimeout(function(){
            that.slide_animate_left(img_selecter,next_slide,current_index,animation_interval);
            that.slide_animate_right(text_selecter,next_slide,current_index,animation_interval);
            setTimeout(function(){that.start_slider();},animation_interval);
          },slide_interval); // end setTimeout
        } // end if
      }, slide_interval); // end setInterval
    },
    slide_animate_left : function(select,current,next,interval){
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
    slide_animate_right : function(select,current,next,interval){
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
