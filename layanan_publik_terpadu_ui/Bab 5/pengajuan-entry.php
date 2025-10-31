<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Pengajuan Layanan</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <main class="admin-main">
    <h1>Form Pengajuan Layanan Publik</h1>
    <form action="pengajuan-proses.php" method="post" enctype="multipart/form-data">
      <label>Nama Pemohon</label>
      <input type="text" name="nama" required>

      <label>Jenis Layanan</label>
      <select name="layanan" required>
        <option value="">-- Pilih Layanan --</option>
        <option value="E-KTP">E-KTP</option>
        <option value="IMB">IMB</option>
        <option value="Bantuan Sosial">Bantuan Sosial</option>
      </select>

      <label>Upload Berkas Pendukung</label>
      <input type="file" name="berkas" required>

      <label>Deskripsi</label>
      <textarea name="deskripsi" rows="4" style="width:100%;border-radius:8px;border:1px solid #ccc;"></textarea>

      <button class="btn-primary" type="submit" name="simpan">Kirim Pengajuan</button>
    </form>
  </main>
</body>
</html>
