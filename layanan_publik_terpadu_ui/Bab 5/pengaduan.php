<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Data Pengaduan</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <aside class="sidebar">
    <div class="brand">Admin Panel</div>
    <nav>
 <a href="admin.php">Dashboard</a>
<a href="pengajuan.php">Data Pengajuan</a>
<a href="pengaduan.php" class="active">Data Pengaduan</a>
<a href="index.php">Keluar</a>
    </nav>
  </aside>

  <main class="admin-main">
    <header class="admin-header">
      <h1>Data Pengaduan</h1>
      <button class="btn-primary">+ Tambah Pengaduan</button>
    </header>

    <table borde="1" width="100%" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Pelapor</th>
          <th>Judul Pengaduan</th>
          <th>Tanggal</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PD-010</td>
          <td>Sari</td>
          <td>Jalan Rusak</td>
          <td>2025-09-02</td>
          <td>Dalam Proses</td>
          <td>
            <button>✏️ Edit</button>
            <button>🗑️ Hapus</button>
          </td>
        </tr>
        <tr>
          <td>PD-011</td>
          <td>Dewi</td>
          <td>Lampu Mati</td>
          <td>2025-09-04</td>
          <td>Selesai</td>
          <td>
            <button>✏️ Edit</button>
            <button>🗑️ Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</body>
</html>
