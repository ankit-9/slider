jQuery.fn.extend({
    start_slider : function(){
      var that = this;
      var selecter = $(this);
      var img_selecter = selecter.find("img");
      var text_selecter = selecter.find(".slider-text");
      var current_index = 0;
      var last_index = (img_selecter.length - 1);
      var slide_interval = selecter.data('slidechange-interval');
      var animation_interval = selecter.data('animation-interval');

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
            img_selecter.eq(next_slide).animate({left:400},animation_interval,function(){
              img_selecter.eq(next_slide).removeClass("active").removeAttr("style");
            });
            img_selecter.eq(current_index).animate({left:0},animation_interval,function(){
              img_selecter.eq(current_index).removeClass("next").addClass("active").removeAttr("style");
            });

            text_selecter.eq(next_slide).animate({right:400},animation_interval,function(){
              text_selecter.eq(next_slide).removeClass("active").removeAttr("style");
            });
            text_selecter.eq(current_index).animate({right:0},animation_interval,function(){
              text_selecter.eq(current_index).removeClass("next").addClass("active").removeAttr("style");
              selecter.start_slider(); // recall start_slider
            });
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
