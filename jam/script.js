let ini12Jam = true;
let temaSaatIni = localStorage.getItem('temaJam') || 'blue';
const tema = {
    blue: { waktu: '#1a17fe', shadow: 'rgba(26, 23, 254, 0.5)', button: '#1a17fe', buttonHover: 'rgba(26, 23, 254, 0.8)', body: 'linear-gradient(135deg, rgb(8, 20, 119), #000)' },
    red: { waktu: '#fe1717', shadow: 'rgba(254, 23, 23, 0.5)', button: '#fe1717', buttonHover: 'rgba(254, 23, 23, 0.8)', body: 'linear-gradient(135deg, rgb(119, 8, 8), #000)' },
    green: { waktu: '#41fe17', shadow: 'rgba(65, 254, 23, 0.5)', button: '#41fe17', buttonHover: 'rgba(65, 254, 23, 0.8)', body: 'linear-gradient(135deg, rgb(8, 119, 19), #000)' }
};

// Elemen style untuk keyframes dinamis
let styleElement = document.getElementById('dynamic-style');
if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'dynamic-style';
    document.head.appendChild(styleElement);
}

function setelTema(theme) {
    // Terapkan warna tema ke elemen waktu
    document.getElementById('waktu').style.color = tema[theme].waktu;
    document.getElementById('waktu').style.textShadow = `0 0 10px ${tema[theme].waktu}, 0 0 20px ${tema[theme].waktu}`;
    // Terapkan bayangan dan animasi ke jam
    document.querySelector('.jam').style.boxShadow = `0 0 20px ${tema[theme].shadow}`;
    document.querySelector('.jam').style.animation = `pulse 2s infinite ease-in-out`;
    // Terapkan warna tombol
    document.querySelectorAll('button').forEach(btn => {
        btn.style.background = tema[theme].button;
        btn.onmouseover = () => btn.style.background = tema[theme].buttonHover;
        btn.onmouseout = () => btn.style.background = tema[theme].button;
    });
    // Terapkan latar belakang
    document.body.style.background = tema[theme].body;
    localStorage.setItem('temaJam', theme);

    // Perbarui keyframes pulse
    styleElement.textContent = `
        @keyframes pulse {
            0% { box-shadow: 0 0 20px ${tema[theme].shadow}; }
            50% { box-shadow: 0 0 30px ${tema[theme].shadow.replace('0.5', '0.8')}; }
            100% { box-shadow: 0 0 20px ${tema[theme].shadow}; }
        }
    `;
}

function updateJam() {
    const now = new Date();
    let jam = now.getHours();
    let periode = '';
    if (ini12Jam) {
        periode = jam >= 12 ? 'PM' : 'AM';
        jam = jam % 12 || 12;
    }
    jam = jam.toString().padStart(2, '0');
    let menit = now.getMinutes().toString().padStart(2, '0');
    let detik = now.getSeconds().toString().padStart(2, '0');
    const timeString = ini12Jam ? `${jam}:${menit}:${detik} ${periode}` : `${jam}:${menit}:${detik}`;
    document.getElementById('waktu').textContent = timeString;
    const opsi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', opsi);
    document.getElementById('tanggal').textContent = dateString;
}

// Aktifkan tombol toggle format
document.getElementById('toggleFormat').addEventListener('click', () => {
    ini12Jam = !ini12Jam;
    updateJam();
});

// Aktifkan tombol ganti warna
document.getElementById('changeColor').addEventListener('click', () => {
    const themeKeys = Object.keys(tema);
    const currentIndex = themeKeys.indexOf(temaSaatIni);
    temaSaatIni = themeKeys[(currentIndex + 1) % themeKeys.length];
    setelTema(temaSaatIni);
    updateJam();
});

// Inisialisasi tema dan jam
setelTema(temaSaatIni);
setInterval(updateJam, 1000);
updateJam();