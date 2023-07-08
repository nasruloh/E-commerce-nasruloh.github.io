$(function () {
  $(document).scroll(function () {
    //saat di scroll akan mendeteksi panjang dari pixel halaman

    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
