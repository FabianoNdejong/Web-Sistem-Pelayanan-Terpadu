<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin - Sistem Pelayanan Terpadu</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <aside class="sidebar">
    <div class="brand">Admin Panel</div>
    <nav>
<a href="admin.php" class="active">Dashboard</a>
<a href="pengajuan.php">Data Pengajuan</a>
<a href="pengaduan.php">Data Pengaduan</a>
<a href="index.php" id="logout-btn">Keluar</a>

    </nav>
  </aside>

  <main class="admin-main">
    <header class="admin-header">
      <h1>Dashboard Admin</h1>
      <button id="btn-add" class="btn-primary">+ Tambah Data</button>
    </header>

    <section class="admin-stats">
      <div class="stat"><h3 id="user-count">1284</h3><p>Pengguna Terdaftar</p></div>
      <div class="stat"><h3 id="req-count">46</h3><p>Pengajuan Diproses</p></div>
      <div class="stat"><h3 id="done-count">892</h3><p>Layanan Selesai</p></div>
    </section>
  </main>

  <div class="toast-wrapper" id="toast-wrapper"></div>
  <script src="assets/js/script.js"></script>
</body>
</html>
