$(function() {

// scroll effect with element
new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );
new cbpScroller( document.getElementById( 'cbp-so-scroller_one' ) );

// menu sticker
$("#sticker").sticky({ topSpacing: 0 });

// label data
$("input.label_better").label_better({
  position: "top", // This will let you define the position where the label will appear when the user clicked on the input fields. Acceptable options are "top", "bottom", "left" and "right". Default value is "top".
  animationTime: 500, // This will let you control the animation speed when the label appear. This option accepts value in milliseconds. The default value is 500.
  easing: "ease-in-out", // This option will let you define the CSS easing you would like to see animating the label. The option accepts all default CSS easing such as "linear", "ease" etc. Another extra option is you can use is "bounce". The default value is "ease-in-out".
  offset: 10, // You can add more spacing between the input and the label. This option accepts value in pixels (without the unit). The default value is 20.
  hidePlaceholderOnFocus: true // The default placeholder text will hide on focus
});

// slider
var Page = (function() {
  var $navArrows = $( '#nav-arrows' ),
    $nav = $( '#nav-dots > span' ),
    slitslider = $( '#slider' ).slitslider( {
      onBeforeChange : function( slide, pos ) {
        $nav.removeClass( 'nav-dot-current' );
        $nav.eq( pos ).addClass( 'nav-dot-current' );
      }
    } ),
    init = function() {
      initEvents();   
    },
    initEvents = function() {
      // add navigation events
      $navArrows.children( ':last' ).on( 'click', function() {
        slitslider.next();
        return false;
      } );
      $navArrows.children( ':first' ).on( 'click', function() {   
        slitslider.previous();
        return false;
      } );
      $nav.each( function( i ) {
        $( this ).on( 'click', function( event ) {
          var $dot = $( this );
          if( !slitslider.isActive() ) {
            $nav.removeClass( 'nav-dot-current' );
            $dot.addClass( 'nav-dot-current' ); 
          }
          slitslider.jump( i + 1 );
          return false;
        } );
      } );
    };
    return { init : init };
})();
Page.init();

// modernizr check

if (Modernizr.touch) {   
    $('content_stl ul li').touchstart(function(){
      $('content_stl ul li figcaption').addClass('touch_active').css({
         "-webkit-transform": "translateY(0)",
          "-moz-transform": "translateY(0)",
          "-ms-transform": "translateY(0)",
          "transform": "translateY(0)",
          "opacity":"1"
        })
    });
} else {
    $('.content_stl2 .clients > div img').hover(function(){
      $(this).addClass('scale_modernzr');
    },function(){
      $(this).removeClass('scale_modernzr');
    });
}

// плавная прокрутка
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });

      });