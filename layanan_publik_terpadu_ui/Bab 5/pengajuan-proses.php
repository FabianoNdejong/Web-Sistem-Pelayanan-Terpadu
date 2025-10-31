<?php 
if(isset($_POST['simpan'])) {
    $nama = $_POST['nama'];
    $layanan = $_POST['layanan'];
    $deskripsi = $_POST['deskripsi'];
    $file = $_FILES['berkas']['name'];

    echo "<h2>Hasil Pengajuan Layanan</h2>";
    echo "Nama Pemohon : " . htmlspecialchars($nama) . "<br>";
    echo "Jenis Layanan : " . htmlspecialchars($layanan) . "<br>";
    echo "Deskripsi : " . htmlspecialchars($deskripsi) . "<br>";
    echo "Nama Berkas : " . htmlspecialchars($file);
}
?>
