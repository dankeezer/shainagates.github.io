function statusFadeIn() {
  var oldScrollTop = $('.overlay').scrollTop();
  var oldScrollLeft = $('.overlay').scrollLeft();

  $('.overlay').scroll(function () {
    if(oldScrollTop == $('.overlay').scrollTop()) {
        $('#status').fadeIn();
    }
    else {
        $('#current').html('Vertical');
    }
    oldScrollTop = $('.overlay').scrollTop();
    oldScrollLeft = $('.overlay').scrollLeft();
  });
};

$(function() {
    $('#status a').bind('click',function(event){
        var $anchor = $(this);
        var $overlay = $('.overlay');
        var scrollLeft = $overlay.scrollLeft() + $($anchor.attr('href')).offset().left;

        $('.overlay').stop().animate({
            scrollLeft: scrollLeft
        }, 1000);

        event.preventDefault();
    });
});

function photoResize() {
  $('img').attr('height', $(window).height());

  $(window).bind('resize', function () {
    $('img').attr('height', $(window).height());
  });
}

window.onload =
  photoResize();
  statusFadeIn();
  $("#contact").width($(window).width());
  $("#cv").width($(window).width());