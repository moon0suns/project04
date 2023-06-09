$(function () {

    $('.main_slide').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,

    })

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

