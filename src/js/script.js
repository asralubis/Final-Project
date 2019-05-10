// event saat link di klik
$('.nav-link').on('click', function (e) {


    // ambil isi href
    var tujuan = $(this).attr('href');

    // menangkap elemen
    var elemenTujuan = $(tujuan);

    // pindah scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 80
    }, 1500);

    e.preventDefault();
})


// kembali ke top page saat refresh browser
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}