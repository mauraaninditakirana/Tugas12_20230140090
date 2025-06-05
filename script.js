// Fungsi untuk menampilkan alert biasa
function showSimpleAlert(data) {
    // Format tanggal
    const tanggalFormatted = formatTanggal(data.tanggal);
    
    // Buat pesan alert
    const alertMessage = `Nama : ${data.nama}
NIM : ${data.nim}
Peminatan : ${data.peminatan}
Alamat : ${data.alamat}
Angkatan : ${data.angkatan}
Tanggal : ${tanggalFormatted}`;
    
    // Tampilkan alert biasa
    alert(alertMessage);
}

// Fungsi untuk menampilkan data dari form menggunakan HTML DOM
function tampilkanData() {
    // Mengambil nilai dari input menggunakan getElementById
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var email = document.getElementById("email").value;
    var peminatan = document.getElementById("peminatan").value;
    var alamat = document.getElementById("alamat").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    
    // Validasi input - memastikan semua field terisi
    if (nama === "" || nim === "" || email === "" || peminatan === "" || alamat === "" || angkatan === "" || tanggal === "") {
        alert("⚠️ Harap lengkapi semua field!");
        return;
    }
    
    // Validasi email sederhana
    if (!validateEmail(email)) {
        alert("⚠️ Format email tidak valid!");
        return;
    }
    
    // Format tanggal untuk tampilan yang lebih baik
    var tanggalFormatted = formatTanggal(tanggal);
    
    // Menampilkan data ke dalam elemen HTML menggunakan DOM
    document.getElementById("hasilNama").innerHTML = nama;
    document.getElementById("hasilNim").innerHTML = nim;
    document.getElementById("hasilEmail").innerHTML = email;
    document.getElementById("hasilPeminatan").innerHTML = peminatan;
    document.getElementById("hasilAlamat").innerHTML = alamat;
    document.getElementById("hasilAngkatan").innerHTML = angkatan;
    document.getElementById("hasilTanggal").innerHTML = tanggalFormatted;
    
    // Menampilkan section hasil
    document.getElementById("hasil").style.display = "block";
    
    // Scroll ke hasil dengan smooth behavior
    document.getElementById("hasil").scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Menampilkan alert biasa dengan semua data setelah delay
    setTimeout(function() {
        showSimpleAlert({
            nama: nama,
            nim: nim,
            peminatan: peminatan,
            alamat: alamat,
            angkatan: angkatan,
            tanggal: tanggal
        });
    }, 500);
    
    // Log data ke console untuk debugging
    console.log("Data yang dimasukkan:");
    console.log("Nama: " + nama);
    console.log("NIM: " + nim);
    console.log("Email: " + email);
    console.log("Peminatan: " + peminatan);
    console.log("Alamat: " + alamat);
    console.log("Angkatan: " + angkatan);
    console.log("Tanggal Lahir: " + tanggalFormatted);
}

// Fungsi untuk validasi email
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fungsi untuk format tanggal menjadi lebih readable (format YYYY-MM-DD)
function formatTanggal(tanggal) {
    if (!tanggal) return "";
    
    var date = new Date(tanggal);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    
    return year + '-' + month + '-' + day;
}

// Event listener untuk form submission (mencegah default behavior)
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            tampilkanData();
        });
    }
    
    // Auto-focus pada input pertama
    var namaInput = document.getElementById('nama');
    if (namaInput) {
        namaInput.focus();
    }
    
    // Event listener untuk Enter key pada semua input
    var inputs = document.querySelectorAll('input, select');
    inputs.forEach(function(input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                tampilkanData();
            }
        });
    });
    
    // Event listener untuk ESC key (tidak diperlukan lagi untuk alert biasa)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Alert biasa akan tertutup otomatis
        }
    });
});

// Fungsi untuk menampilkan informasi DOM (untuk debugging)
function showDOMInfo() {
    console.log("=== Informasi DOM ===");
    console.log("Document Title: " + document.title);
    console.log("URL: " + document.URL);
    console.log("Domain: " + document.domain);
    console.log("Total Elements: " + document.getElementsByTagName('*').length);
    console.log("Form Elements: " + document.forms.length);
    
    // Menampilkan semua elemen input
    var inputs = document.querySelectorAll('input, select');
    console.log("Input Elements: " + inputs.length);
    inputs.forEach(function(input, index) {
        console.log((index + 1) + ". " + input.tagName + " - ID: " + input.id + " - Name: " + input.name);
    });
}

// Fungsi untuk animasi loading button (opsional)
function showLoadingButton() {
    var button = document.querySelector('.btn-kirim');
    button.innerHTML = '⏳ Memproses...';
    button.disabled = true;
    
    setTimeout(function() {
        button.innerHTML = '🚀 Kirim Data';
        button.disabled = false;
    }, 1000);
}