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


});


