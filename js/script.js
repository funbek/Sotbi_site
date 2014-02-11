$(function() {

// scroll effect with element
new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );

// menu sticker
         $("#sticker").sticky({ topSpacing: 0 });
// use flat-shadow for icons
         $(".flat-icon").flatshadow({
           color: "#000000", // Background color of elements inside. (Color will be random if left unassigned)
           angle: "SE", // Shadows direction. Available options: N, NE, E, SE, S, SW, W and NW. (Angle will be random if left unassigned)
           fade: true, // Gradient shadow effect
           boxShadow: "#000000" // Color of the Container's shadow
         });



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
        
        // if (Modernizr.touch) {   
        //     alert('Touch Screen');  
        // } else {
        //     $('<link rel="stylesheet" type="text/css" href="css/styles.css" />').appendTo('head')
        // }


      });



$(document).ready(function(){
  $("#contactform").validate({
    rules: {
      name: {
        required: true,
        rangelength: [2, 20],
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        digits: true
      }
    },
    messages: {
      name: {
        required: "Введите имя",
        rangelength: "Слишком короткое имя"
      },
      email: {
        required: "Введите E-mail",
        email: "Неверный формат E-mail"
      },
      phone: {
        required: "Введите телефон",
        email: "Неверный формат телефона",
        digits: "Введите павильно номер телефона"
      }
    }
  });
});
