
const images = document.querySelectorAll('.slideshow-container');
let current = 0;

function changeImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length; // Loop kembali ke gambar pertama
    images[current].classList.add('active');
}

setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik