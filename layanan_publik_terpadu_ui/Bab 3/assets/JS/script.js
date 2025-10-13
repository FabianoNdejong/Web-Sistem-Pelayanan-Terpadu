document.addEventListener('DOMContentLoaded', () => {
  // 1) Greeting
  const greetingEl = document.getElementById('greeting-line');
  const now = new Date();
  const hour = now.getHours();
  let greeting = 'Selamat datang!';
  if (hour >= 4 && hour < 11) greeting = 'Selamat pagi 👋';
  else if (hour >= 11 && hour < 15) greeting = 'Selamat siang 👋';
  else if (hour >= 15 && hour < 18) greeting = 'Selamat sore 👋';
  else greeting = 'Selamat malam 👋';
  const dateStr = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  greetingEl.textContent = `${greeting} Hari ini, ${dateStr}.`;

  // 2) Stats
  const stats = { users: 1284, pengajuan: 46, selesai: 892 };
  document.getElementById('stat-users').textContent = stats.users.toLocaleString('id-ID');
  document.getElementById('stat-pengajuan').textContent = stats.pengajuan.toLocaleString('id-ID');
  document.getElementById('stat-selesai').textContent = stats.selesai.toLocaleString('id-ID');

  // 3) Services Grid
  const services = [
    { id: 'svc-1', title: 'Administrasi Kependudukan', desc: 'e-KTP, Kartu Keluarga, Akta Kelahiran', img: 'assets/img/service-1.svg' },
    { id: 'svc-2', title: 'Perizinan', desc: 'IMB, Izin Usaha, Sertifikat', img: 'assets/img/service-2.svg' },
    { id: 'svc-3', title: 'Informasi Publik', desc: 'Akses data dan informasi layanan publik', img: 'assets/img/service-3.svg' },
    { id: 'svc-4', title: 'Layanan Sosial', desc: 'Bantuan sosial dan program kesejahteraan', img: 'assets/img/service-1.svg' }
  ];

  const grid = document.getElementById('services-grid');
  grid.innerHTML = '';
  services.forEach(svc => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <img src="${svc.img}" alt="${svc.title}">
      <h3>${svc.title}</h3>
      <p>${svc.desc}</p>
      <div style="margin-top:10px">
        <button class="btn-ghost" data-svc="${svc.id}">Lihat</button>
        <button class="btn-primary" data-svc="${svc.id}" style="margin-left:8px">Ajukan</button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const svc = services.find(s => s.id === btn.dataset.svc);
    if (!svc) return;
    if (btn.classList.contains('btn-primary')) {
      showToast(`Arahkan ke form pengajuan untuk: ${svc.title}`, { type: 'info', duration: 3500 });
    } else {
      showToast(`Info layanan: ${svc.title}`, { type: 'success', duration: 2800 });
    }
  });

  // 4) Announcements
  const announcements = [
    { text: 'Pelayanan e-KTP online akan ditingkatkan pada 15 Oktober 2025.' },
    { text: 'Pendaftaran IMB kini dapat diajukan tanpa datang ke kantor.' },
    { text: 'Pemadaman listrik terjadwal di kec. Timur pada 20 Okt 2025.' }
  ];
  const annList = document.getElementById('announcements');
  announcements.forEach(a => {
    const li = document.createElement('li');
    li.textContent = a.text;
    annList.appendChild(li);
  });

  // 5) Highlight active nav
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === window.location.pathname.split('/').pop() || a.getAttribute('href') === 'index.html') {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  // 6) Ticket search
  document.getElementById('btn-search').addEventListener('click', () => {
    const ticket = document.getElementById('ticket-input').value.trim();
    if (!ticket) {
      showToast('Masukkan nomor tiket terlebih dahulu.', { type: 'warn' });
      return;
    }
    showToast(`Cek status tiket ${ticket}... (simulasi)`, { type: 'info' });
    setTimeout(() => showToast(`Tiket ${ticket}: Status — Dalam Proses`, { type: 'success' }), 1200);
  });

  // 7) CTA events
  document.getElementById('cta-login').addEventListener('click', () => {
    showToast('Silakan login untuk melanjutkan.', { type: 'info' });
  });
  document.getElementById('cta-register').addEventListener('click', () => {
    showToast('Silakan daftar untuk membuat akun baru.', { type: 'info' });
  });

  // Welcome message
  showToast(`${greeting} Selamat datang di Sistem Pelayanan Terpadu.`, { type: 'success', duration: 4200 });
});

// Toast implementation
function showToast(message, opts = {}) {
  const wrapper = document.getElementById('toast-wrapper');
  if (!wrapper) return;
  const { type = 'info', duration = 3000 } = opts;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');
  toast.innerHTML = `
    <div class="msg">${escapeHtml(message)}</div>
    <button class="close" aria-label="close">&times;</button>
  `;
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

function escapeHtml(str) {
  return str.replace(/[&<>"'`=\/]/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'
  }[s]));
}
