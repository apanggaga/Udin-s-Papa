const heart = document.querySelector('.heart');
const text = document.getElementById('text');

heart.addEventListener('click', () => {
    // Tambahkan kelas "visible" ke teks untuk menampilkannya
    text.classList.add('visible');
});