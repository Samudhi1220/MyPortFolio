$('.Customer').css('display','none');
$('.Item').css('display','none');
$('.OrderDetails').css('display','none');

$('#nav-link1').click(function () {
    $('.Customer').css('display','none');
    $('.Item').css('display','none');
    $('.OrderDetails').css('display','none');
    $('.Dashboard').css('display','block');
})
$('#nav-link2').click(function () {
    $('.Customer').css('display','block');
    $('.Dashboard').css('display','none');
    $('.Item').css('display','none');
    $('.OrderDetails').css('display','none');
})
$('#nav-link3').click(function () {
    $('.Customer').css('display','none');
    $('.Dashboard').css('display','none');
    $('.Item').css('display','block');
    $('.OrderDetails').css('display','none');
})
$('#nav-link4').click(function () {
    $('.Customer').css('display','none');
    $('.Dashboard').css('display','none');
    $('.Item').css('display','none');
    $('.OrderDetails').css('display','block');
})