$(function(){
    $('.index-btn').click(function(){
        var clickedIndex = $('.index-btn').index($(this));
        $('.active').removeClass('active');
        $('.photo').eq(clickedIndex).addClass('active');
    });

});