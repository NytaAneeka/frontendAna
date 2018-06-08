//ADDS CLASS TO li TAG
$(document).ready(function () {
    $('li.presentation').on('click', function () {
        $('li.presentation a').removeClass('active2');
        $(this).find('a').addClass('active2');
    });
    $('.panel-heading').on('click', function () {
        if($(this).hasClass('active3')) {
            $(this).removeClass('active3');
            $('.panel-heading').removeClass('active3');
        }else {
            $('.panel-heading').removeClass('active3');
            $(this).addClass('active3');
        }
    });


// COUNTS AND ANIMATES SKILL PROGRESS BARS

    $(window).scroll(function() {
        var hT = $('.skills').offset().top,
            hH = $('.skills').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('.progress .progress-bar').progressbar({display_text: 'center'});
        }
    });


    // SHOPPING BASKET DROPDOWN
    $(document).mouseup(function(e)
    {
        var arr = [
            '#toggleContainer'
        ];
        ensureHideOnOutsideClick(arr, e);
    });

    $(document).find('button.shopping-cart-icon').on('click', function (e) {
        e.preventDefault();

        var elm = $(document).find('#toggleContainer');

        if (elm.hasClass('d-none')) {
            elm.removeClass('d-none');
        } else {
            elm.addClass('d-none');
        }
        return false;
    });

    /**
     * @param {array} arr
     * @param {object} event
     */
    function ensureHideOnOutsideClick(arr, event) {
        for (var i = 0; i < arr.length; i++) {
            var container = $(document).find(arr[i]);

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(event.target) && container.has(event.target).length === 0) {
                container.addClass('d-none');
            }
        }
    }


    //BOARDER CHANGES WIDTH ON MOUSE HOVER
    $('.hover-board').on('mouseenter',function () {
        $(this).find('.green-border').animate({width:'30%'});
    });
    $('.hover-board').on('mouseleave',function () {
        $(this).find('.green-border').animate({width:'15%'});
    });



    $('.dropdown').hover(function(){
        $('.dropdown-toggle', this).trigger('click');
    });

});


