$(function () {

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });


    // mian_visual 화살표← →
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .next').on('click', function () {
        $('.main_slide').slick('slickNext')
    });



    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    })

    $('#f1').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk, '바뀌네~~')
        lnk && window.open(lnk);
    })

    $('.family_link').on('click', function () {
        $(this).next().toggleClass('on');
        $(this).toggleClass('on');
    })


})

