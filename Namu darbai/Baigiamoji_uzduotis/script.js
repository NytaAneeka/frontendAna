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

// COUNTS RUNNING NUMBERS
    $(window).scroll(function() {
        var hT = $('.numbers').offset().top,
            hH = $('.numbers').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('.Count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $(window).unbind('scroll');
        }
    });



// COUNTS AND ANIMATES SKILL PROGRESS BARS

    $(window).scroll(function() {
        var hT = $('.skills').offset().top,
            hH = $('.skills').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $(".web-design").animate({
                    width: ["80%"]
                },
                {
                    duration:800,
                    step: function(now, fx) {
                        if(fx.prop == 'width') {
                            $(this).text(Math.round(now * 100) / 100 + '%');
                        }
                    }
                }    );
            $(".programming").animate({
                width: "60%"
            }, 800);
            $(".html-css").animate({
                width: "70%"
            },800);
            $(".wordpress").animate({
                width: "100%"
            },800);
            $(".joomla").animate({
                width: "40%"
            },800);
            // $('.count-skills').each(function () {
            //     $(this).prop('Counter',0).animate({
            //         Counter: $(this).text()
            //     }, {
            //         duration: 800,
            //         easing: 'swing',
            //         step: function (now) {
            //             $(this).text(Math.ceil(now));
            //         }
            //     });
            // });
            $(window).unbind('scroll');
        }
    });

});


