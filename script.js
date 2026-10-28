// Simulasi database awal / data pendaftar dummy
let pendaftarList = [
    { nama: "Siti Aminah", email: "siti@email.com", jurusan: "MIPA", asalSekolah: "SMPN 5 Bandung", status: "Terverifikasi" },
    { nama: "Rizky Pratama", email: "rizky@email.com", jurusan: "RPL", asalSekolah: "SMPIT Al-Fityan", status: "Menunggu Seleksi" }
];

// Fungsi untuk merender data ke dalam tabel HTML
function renderTabel() {
    const tbody = document.querySelector("#tabelPendaftar tbody");
    tbody.innerHTML = "";

    pendaftarList.forEach((pendaftar, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${pendaftar.nama}</td>
            <td>${pendaftar.email}</td>
            <td>${pendaftar.jurusan}</td>
            <td>${pendaftar.asalSekolah}</td>
            <td><strong>${pendaftar.status}</strong></td>
        `;
        tbody.appendChild(tr);
    });
}

// Event listener ketika formulir dikirim (submit)
document.getElementById("spmbForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah reload halaman secara default

    // Ambil nilai dari input form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const jurusan = document.getElementById("jurusan").value;
    const asalSekolah = document.getElementById("asalSekolah").value;

    // Buat objek pendaftar baru
    const pendaftarBaru = {
        nama: nama,
        email: email,
        jurusan: jurusan,
        asalSekolah: asalSekolah,
        status: "Menunggu Seleksi"
    };

    // Masukkan ke dalam array data
    pendaftarList.push(pendaftarBaru);

    // Update tampilan tabel
    renderTabel();

    // Reset form setelah berhasil
    alert("Pendaftaran Berhasil! Data Anda telah masuk ke sistem SPMB.");
    document.getElementById("spmbForm").reset();
    
    // Arahkan otomatis ke bagian data pendaftar agar user bisa melihat hasilnya
    window.location.hash = "#data";
});

// Panggil fungsi render pertama kali saat halaman dimuat
window.onload = function() {
    renderTabel();
};
