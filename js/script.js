$(function() {
// menu sticker
         $("#sticker").sticky({ topSpacing: 0 });
// use flat-shadow for icons
         $(".flat-icon").flatshadow({
           color: "#000000", // Background color of elements inside. (Color will be random if left unassigned)
           angle: "SE", // Shadows direction. Available options: N, NE, E, SE, S, SW, W and NW. (Angle will be random if left unassigned)
           fade: true, // Gradient shadow effect
           boxShadow: "#000000" // Color of the Container's shadow
         });

// shadow for chief
         $('.chief').realshadow({
            type: 'drop'
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
      });