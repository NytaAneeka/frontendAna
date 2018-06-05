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
});

