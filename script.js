document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen-elemen yang akan digunakan
    const contactButton = document.querySelector('.btn-primary'); // Tombol utama untuk membuka popup kontak
    const popup = document.querySelector('.contact-popup'); // Elemen popup kontak
    const closePopupButton = document.querySelector('.btn-close'); // Tombol untuk menutup popup kontak

    // Fungsi untuk membuka popup kontak
    function openPopup() {
        popup.style.display = 'block'; // Menampilkan popup kontak
    }

    // Fungsi untuk menutup popup kontak
    function closePopup() {
        popup.style.display = 'none'; // Menyembunyikan popup kontak
    }

    // Event listener untuk tombol utama agar membuka popup kontak
    contactButton.addEventListener('click', openPopup);

    // Event listener untuk tombol close pada popup kontak agar menutup popup
    closePopupButton.addEventListener('click', closePopup);

    // Fungsi untuk membuka modal promo setelah 5 detik
    setTimeout(function () {
        var promoModal = new bootstrap.Modal(document.getElementById('promoModal')); // Mendapatkan elemen modal promo
        promoModal.show(); // Menampilkan modal promo
    }, 5000); // Waktu tunggu selama 5000 milidetik atau 5 detik
});
