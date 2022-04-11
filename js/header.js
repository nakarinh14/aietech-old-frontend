
var pcflag = false;
$('#heng').click(function () {
    $('#tan').slideDown()
    $('.menu').fadeIn(400);
})

$('#hengClose').click(function () {
    $('#tan').slideUp()
    $('.arrow').removeClass('curr')
    $('.lang').css('display', 'none');
    pcflag = false;
    flag = false;
})

var flag = false;

$('.language').click(function () {
    if (flag == false) {
        $('.menu').css('display', 'none');
        $('.lang').fadeIn(400);
        $('.arrow').addClass('curr')
        flag = true;

    } else {
        $('.lang').css('display', 'none');
        $('.menu').fadeIn(400);
        $('.arrow').removeClass('curr')

        flag = false;
    }

})

$('#pc_lang span').click(function () {
    if (pcflag == false) {
        $('#pc_lang .index-header-lang').fadeIn(400);
        $('.arrow').addClass('curr')
        pcflag = true;

    } else {
        $('#pc_lang .index-header-lang').fadeOut(400);
        $('.arrow').removeClass('curr')

        pcflag = false;
    }

})
