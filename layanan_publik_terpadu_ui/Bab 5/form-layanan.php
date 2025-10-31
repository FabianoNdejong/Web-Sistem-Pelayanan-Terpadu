<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Pengajuan Layanan Publik</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    body {
      background-color: var(--bg);
      font-family: Inter, sans-serif;
    }
    h1 {
      color: var(--green-700);
      margin-bottom: 20px;
    }
    .form-card {
      width: 40%;
      margin: 50px auto;
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 8px 20px rgba(2, 48, 32, 0.08);
    }
    label {
      font-weight: 600;
      margin-bottom: 6px;
    }
    input, select {
      width: 100%;
      padding: 10px;
      margin-bottom: 14px;
      border-radius: 8px;
      border: 1px solid #dbe9df;
    }
    .button {
      background: var(--green-500);
      border: none;
      color: white;
      padding: 10px;
      width: 100%;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
    }
    .button:hover {
      background: var(--green-700);
    }
    #hasil {
      margin-top: 16px;
      background: var(--green-100);
      padding: 12px;
      border-radius: 8px;
    }
  </style>
</head>

<body>
  <cente>
    <h1>Form Pengajuan Layanan Publik</h1>
    <div class="form-card">
      <form action="" method="POST">
        <label for="nama">Nama Pemohon</label>
        <input type="text" name="nama" id="nama" required>

        <label for="layanan">Jenis Layanan</label>
        <select name="layanan" id="layanan" required>
          <option value="">-- Pilih Layanan --</option>
          <option value="E-KTP">Pembuatan E-KTP</option>
          <option value="IMB">Izin Mendirikan Bangunan (IMB)</option>
          <option value="Bantuan Sosial">Bantuan Sosial</option>
        </select>

        <label for="jumlah">Jumlah Dokumen</label>
        <input type="number" name="jumlah" id="jumlah" required>

        <label for="biaya">Biaya Administrasi (Rp)</label>
        <input type="number" name="biaya" id="biaya" required>

        <input type="submit" class="button" name="btn_proses" value="Hitung Total">
        <input type="reset" class="button" value="Hapus">

        <div id="hasil">
          <?php 
          if (isset($_POST['btn_proses'])) {
              $nama = $_POST['nama'];
              $layanan = $_POST['layanan'];
              $jumlah = $_POST['jumlah'];
              $biaya = $_POST['biaya'];
              $total = $jumlah * $biaya;

              echo "<strong>Hasil Pengajuan:</strong><br>";
              echo "Nama Pemohon: $nama<br>";
              echo "Jenis Layanan: $layanan<br>";
              echo "Jumlah Dokumen: $jumlah<br>";
              echo "Total Biaya: Rp " . number_format($total, 0, ',', '.');
          }
          ?>
        </div>
      </form>
    </div>
  </center>
</body>
</html>
