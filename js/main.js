$(document).ready(function () {
    // STICKY NAV initialization
    $("#card-section").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }

    });

    $("#menu-section").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    
    $("#project-details-section").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    $("#map-section").waypoint(function (direction) {

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
$('.child[data-enlargeable]').addClass('img-enlargeable').click(function () {
    var src = $(this).attr('src');
    var modal;

    function removeModal() {
        modal.remove();
        $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0',
        left: '0',
        cursor: 'zoom-out'
    }).click(function () {
        removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function (e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });
});
// IMAGE FULL SCREEN ON CLICK END ===XXX=======


// LIGHTBOX IMAGE VIEWER START ===============

let modalId = $('#image-gallery');

$(document).ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image')
            .show();
        if (counter_max === counter_current) {
            $('#show-next-image')
                .hide();
        } else if (counter_current === 1) {
            $('#show-previous-image')
                .hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
        let current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image')
            .click(function () {
                if ($(this)
                    .attr('id') === 'show-previous-image') {
                    current_image--;
                } else {
                    current_image++;
                }

                selector = $('[data-image-id="' + current_image + '"]');
                updateGallery(selector);
            });

        function updateGallery(selector) {
            let $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title')
                .text($sel.data('title'));
            $('#image-gallery-image')
                .attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
            $('[data-image-id]')
                .each(function () {
                    counter++;
                    $(this)
                        .attr('data-image-id', counter);
                });
        }
        $(setClickAttr)
            .on('click', function () {
                updateGallery($(this));
            });
    }
});

// build key actions
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
                $('#show-previous-image')
                    .click();
            }
            break;

        case 39: // right
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
                $('#show-next-image')
                    .click();
            }
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

// LIGHTBOX IMAGE VIEWER END ===XXX=======