$(".header_nav_list").bind({
    mouseenter:function(){
        $(this).css({"color":"#6699cc","text-decoration":"underline"});
    },
    mouseleave:function(){
        $(this).css({"color":"#ffffff","text-decoration":"none"});
    }
});

$(".per_news").bind({
    mouseenter:function(){
        $(this).css("background-color","#6699cc");
    },
    mouseleave:function(){
        $(this).css("background-color","#ffffff");
    }
});

$(".rss_bg").bind({
    mouseenter:function(){
        $(this).css("background-color","#121f39");
    },
    mouseleave:function(){
        $(this).css("background-color","#354f86");
    }
});