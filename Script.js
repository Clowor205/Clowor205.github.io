//BAGIAN MENU NYA BISA DI KLIK
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//GARIS BAWAH DI NAVIGASI GERAK
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  
  //PAS DI KLIK MENU NYA LANGSUNG HILANG
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

//KONEKTOR ANIMASI
ScrollReveal({
  //reset: true,
  distance: '10px',
  duration: 1000,
  delay: 300
});
// ANIMASI NYA MUNCUL DARI ATAS
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

// ANIMASI NYA MUNCUL DARI BAWAH
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });

// ANIMASI NYA MUNCUL DARI KIRI
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

// ANIMASI NYA MUNCUL DARI KANAN
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ANIMASI KETIK
const typed = new Typed('.multiple-text', {
  strings: ['Jibril', 'Mikail', 'Isrofil', 'Izroil', 'Munkar', 'Nakir', 'Rokib', 'Atid', 'Malik', 'Ridwan'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// FITUR READ MORE NYA AKTIF
document.querySelectorAll(".services-box, .about-content").forEach(box => {
  const teks = box.querySelector(".teks");
  const tombol = box.querySelector(".read");

  tombol.addEventListener("click", () => {
  teks.classList.toggle("perluas");
  const diperluas = teks.classList.contains("perluas");
  tombol.textContent = diperluas ? "Baca Lebih Sedikit" : "Baca Selengkapnya";
  });
});

// TEMA GELAP
let temaGelap = document.querySelector('#darkMode-icon');

temaGelap.onclick = () => {
  temaGelap.classList.toggle('bxs-sun');
  document.body.classList.toggle('dark-mode');
};