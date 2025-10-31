document.addEventListener('DOMContentLoaded', () => {
  // GREETING
  const greetingEl = document.getElementById('greeting-line');
  if (greetingEl) {
    const now = new Date();
    const hour = now.getHours();
    let greet = 'Selamat datang!';
    if (hour >= 4 && hour < 11) greet = 'Selamat pagi 🌤️';
    else if (hour >= 11 && hour < 15) greet = 'Selamat siang ☀️';
    else if (hour >= 15 && hour < 18) greet = 'Selamat sore 🌇';
    else greet = 'Selamat malam 🌙';
    greetingEl.textContent = `${greet} Hari ini ${now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}.`;
  }

  // STATS
  const stats = { users: 1284, pengajuan: 46, selesai: 892 };
  const userEl = document.getElementById('stat-users');
  if (userEl) {
    userEl.textContent = stats.users;
    document.getElementById('stat-pengajuan').textContent = stats.pengajuan;
    document.getElementById('stat-selesai').textContent = stats.selesai;
  }

  // SERVICES
  const services = [
    { id: 1, title: 'Administrasi Kependudukan', desc: 'e-KTP, KK, Akta Lahir' },
    { id: 2, title: 'Perizinan', desc: 'IMB, Izin Usaha, Sertifikat' },
    { id: 3, title: 'Layanan Sosial', desc: 'Bantuan Sosial dan Kesejahteraan' }
  ];
  const grid = document.getElementById('services-grid');
  if (grid) {
    services.forEach(s => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <button class="btn-primary">Ajukan</button>
      `;
      grid.appendChild(card);
    });

    // EVENT 1: Click
    grid.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON') {
        const confirmBox = confirm('Yakin ingin mengajukan layanan ini?');
        if (confirmBox) showToast('Layanan diajukan!', { type: 'success' });
        else showToast('Dibatalkan.', { type: 'warn' });
      }
    });

    // EVENT 2: Hover
    grid.addEventListener('mouseover', e => {
      if (e.target.tagName === 'BUTTON') e.target.style.opacity = '0.7';
    });
    grid.addEventListener('mouseout', e => {
      if (e.target.tagName === 'BUTTON') e.target.style.opacity = '1';
    });
  }

  // ASYNC FETCH (SIMULASI)
  const annList = document.getElementById('announcements');
  if (annList) {
    new Promise(resolve => {
      setTimeout(() => resolve([
        { text: 'Pelayanan e-KTP akan ditingkatkan minggu depan.' },
        { text: 'Pendaftaran IMB kini dapat online.' },
        { text: 'Pemadaman listrik terjadwal di wilayah timur.' }
      ]), 800);
    })
      .then(data => {
        data.forEach(a => {
          const li = document.createElement('li');
          li.textContent = a.text;
          annList.appendChild(li);
        });
      })
      .catch(() => showToast('Gagal memuat pengumuman.', { type: 'error' }));
  }

 // ==== SCROLL EVENT ====
// Pastikan toast hanya muncul sekali saat user pertama kali menggulir
let hasShownScrollToast = false;

window.addEventListener('scroll', () => {
  if (!hasShownScrollToast && window.scrollY > 150) {
    hasShownScrollToast = true; // tandai sudah ditampilkan
    showToast('Anda sedang menjelajah halaman.', { type: 'info', duration: 2000 });
  }
});


  // WEB STORAGE
  const user = localStorage.getItem('username');
  if (user) showToast(`Selamat datang kembali, ${user}!`, { type: 'success' });

  // POPUP di Admin (Tambah Data)
  const addBtn = document.getElementById('btn-add');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const name = prompt('Masukkan nama data baru:');
      if (name) showToast(`Data "${name}" berhasil ditambahkan!`, { type: 'success' });
      else showToast('Penambahan dibatalkan.', { type: 'warn' });
    });
  }

  // LOGOUT
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', e => {
      if (!confirm('Apakah Anda yakin ingin keluar dari sistem?')) e.preventDefault();
      else {
        localStorage.removeItem('username');
        showToast('Anda telah keluar.', { type: 'info' });
      }
    });
  }
});

// TOAST FUNCTION
function showToast(message, opts = {}) {
  const wrapper = document.getElementById('toast-wrapper');
  if (!wrapper) return;
  const { type = 'info', duration = 3000 } = opts;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<div class="msg">${message}</div><button class="close">&times;</button>`;
  toast.querySelector('.close').addEventListener('click', () => hide());
  wrapper.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  const timer = setTimeout(hide, duration);
  function hide() {
    clearTimeout(timer);
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }
}
