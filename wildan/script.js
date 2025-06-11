// Fungsi menampilkan nama
function haLo() {
  totalClicks++;
  totalGreetings++;
  
  const nama = document.getElementById('namaInput').value;
  const output = document.getElementById('output');
  
  if(nama.trim() === '') {
    output.innerHTML = '<div class="pesan">&#128075;&#127995;Halo, teman!</div>';
    logToConsole('Hello, friend!');
  }else {
    output.innerHTML = `<div class="pesan">Halo&#128075;&#127995;, ${nama}! Selamat datang!!! </div>`;
    logToConsole(`Hello, ${nama}!`);
  }
  statiStik();
}

// Jalanin waktu
function waKtu() {
  totalClicks++;
  
  const now = new Date();
  const timeString = now.toLocaleString('id-ID');
  const output = document.getElementById('output');
  
  output.innerHTML = `<div class="pesan">&#9200;waktu sekarang: ${timeString}</div>`;
  logToConsole(`Current time: ${timeString}`);
  statiStik();
}

// Pakai Array untuk buat random greeting
const greetings = ["Halo", "Haii", "Hey", "Selamat Datang", "Assalamualaikum", "P"];

// Jalanin panggilan random
function randomGreeting() {
  totalClicks++;
  totalGreetings++;
  
  const nama = document.getElementById('namaInput').value;
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const randomGreeting = greetings[randomIndex];
  const output = document.getElementById('output');
  
  if(nama.trim() === '') {
    output.innerHTML = `<div class="pesan">&#127922;${randomGreeting}!</div>`;
    logToConsole(`${randomGreeting}, friend`);
  }else {
    output.innerHTML = `<div class="pesan">&#127922;${randomGreeting}, ${nama}!</div>`;
    logToConsole(`${randomGreeting}, ${nama}!`);
  }
  statiStik();
}

//Jalanin fungsi clear
function bersihKan() {
  totalClicks++;
  
  document.getElementById('output').innerHTML = '<div class="pesan">Di bersihkan&#129529;</div>';
  document.getElementById('consoleOutput').style.display = 'none';
  document.getElementById('consoleText').innerHTML = '';
  console.clear();
  
// total greeting nya doang
  totalGreetings = 0;
  statiStik();
}

// Fungsi menampilkan log di html
function logToConsole(pesan) {
  console.log('&#127919;\'' + pesan);
  
const consoleOutput = document.getElementById('consoleOutput');
const consoleText = document.getElementById('consoleText');
 
consoleOutput.style.display = 'block';
consoleText.innerHTML += '&#127919;\' ' + pesan + '\n';
}

//buat variabel statistik
let totalClicks = 0;
let totalGreetings = 0;

// cara aktifin statistik nya
function statiStik() {
  document.getElementById('clickCount').textContent = totalClicks;
  document.getElementById('greetingCount').textContent = totalGreetings;
  
  const namaLength = document.getElementById('namaInput').value.length;
  document.getElementById('charCount').textContent = namaLength;
}

// Kalo user enter langsung di sapa
document.getElementById('namaInput').addEventListener('keypress', function(event) {
  if(event.key === 'Enter') {
    haLo();
  }
});

// aktifin typing live
document.getElementById('namaInput').addEventListener('input', function(event) {
  const nama = event.target.value;
  const indikator = document.getElementById('typingIndicator');
  
  if(nama.length > 0) {
    if(nama.length < 3) {
      indikator.textContent = 'ketik lebih panjang...';
    }else if(nama.length > 15) {
      indikator.textContent = 'nama yang panjang'
    }else {
      indikator.textContent = `${nama} nama yang bagus`
    }
  }else {
    indikator.textContent = '';
  }
  statiStik();
});

