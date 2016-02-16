jQuery.fn.extend({
    start_slider : function(){
      var selecter = $(this);
      var img_selecter = selecter.find("img");
      var text_selecter = selecter.find(".slider-text");
      var current_index = 0;
      var last_index = (img_selecter.length - 1);
      var slide_interval = selecter.data('slidechange-interval');
      var animation_interval = selecter.data('animation-interval');

      loop = setInterval(function () {
        current_slide_no = current_index;
        next_slide_no = current_index + 1;
        current_index++;

        // change class in img tag
        img_selecter.removeClass("active");
        img_selecter.eq(current_slide_no).addClass("active");
        img_selecter.eq(next_slide_no).addClass("next");

        // change class in text container
        text_selecter.removeClass("text-active");
        text_selecter.eq(current_slide_no).addClass("text-active");
        text_selecter.eq(next_slide_no).addClass("text-next");

        // img animation
        img_selecter.eq(current_slide_no).animate({left:400},animation_interval,function(){
            img_selecter.eq(current_slide_no).removeClass("active").removeAttr("style");
        });
        img_selecter.eq(next_slide_no).animate({left:0},animation_interval,function(){
          img_selecter.eq(next_slide_no).removeClass("next").addClass("active").removeAttr("style");
        });

        // text container animation
        text_selecter.eq(current_slide_no).animate({right:400},animation_interval,function(){
            text_selecter.eq(current_slide_no).removeClass("text-active").removeAttr("style");
        });
        text_selecter.eq(next_slide_no).animate({right:0},animation_interval,function(){
          text_selecter.eq(next_slide_no).removeClass("text-next").addClass("text-active").removeAttr("style");
        });

        if(current_index >= last_index){ // check index.length
          clearInterval(loop); // break setInterval
          // reset slide img and text index
          current_index = 0;
          img_selecter.eq(current_index).addClass("next");
          text_selecter.eq(current_index).addClass("text-next");
          setTimeout(function(){
            img_selecter.eq(next_slide_no).animate({left:400},animation_interval,function(){
              img_selecter.eq(next_slide_no).removeClass("active").removeAttr("style");
            });
            img_selecter.eq(current_index).animate({left:0},animation_interval,function(){
              img_selecter.eq(current_index).removeClass("next").addClass("active").removeAttr("style");
            });

            text_selecter.eq(next_slide_no).animate({right:400},animation_interval,function(){
              text_selecter.eq(next_slide_no).removeClass("text-active").removeAttr("style");
            });
            text_selecter.eq(current_index).animate({right:0},animation_interval,function(){
              text_selecter.eq(current_index).removeClass("text-next").addClass("text-active").removeAttr("style");
              selecter.start_slider(); // recall start_slider
            });
          },slide_interval); // end setTimeout
        } // end if
      }, slide_interval); // end setInterval
    }
});
