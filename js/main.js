$(document).ready(function () {


    // STICKY NAV initialization
    $(".js-card-scetion").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    $(".js-des-section").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    $(".js-carousel-section").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

});

// initialization AOS
AOS.init();


// Parllax in carousal initialization START ============

$('.parallaxie').parallaxie();

$('.parallaxie').parallaxie({
    speed: 0.7
});

// image parallax
$('.jarallax').jarallax({
    speed: 0.7
});
// Parllax in carousal initialization END ===XXX=======

// SHOWCASE CAROUSEL Flickity START ===============
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    groupCells: 3
    
  });

// SHOWCASE CAROUSEL Flickity END ===XXX=======

// IMAGE FULL SCREEN ON CLICK START ===============
$('.child[data-enlargeable]').addClass('img-enlargeable').click(function(){
    var src = $(this).attr('src');
    var modal;
    function removeModal(){ modal.remove(); $('body').off('keyup.modal-close'); }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e){
      if(e.key==='Escape'){ removeModal(); } 
    });
});

// IMAGE FULL SCREEN ON CLICK END ===XXX=======