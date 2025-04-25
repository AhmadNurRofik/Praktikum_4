function mulaiQuiz() {
    let uts = promptNilai("UTS");
    let uas = promptNilai("UAS");
    let tugas = promptNilai("Tugas");
  
    const nilaiArray = [uts, uas, tugas];
    const rata = hitungRata(nilaiArray);
  
    // Simpan ke localStorage
    localStorage.setItem("uts", uts);
    localStorage.setItem("uas", uas);
    localStorage.setItem("tugas", tugas);
    localStorage.setItem("rata", rata);
  
    tampilHasil(rata);
  }
  
  function promptNilai(jenis) {
    let nilai;
    do {
      nilai = prompt('Masukkan nilai ${jenis}:');
      if (nilai === null) return 0; // Kalau Cancel
      nilai = parseFloat(nilai);
    } while (isNaN(nilai) || nilai < 0 || nilai > 100);
    return nilai;
  }
  
  function hitungRata(valuesArray) {
    const total = valuesArray.reduce((acc, val) => acc + val, 0);
    return Math.round(total / valuesArray.length);
  }
  
  function tampilHasil(rata) {
    let status = "";
    let grade = "";
    let warna = "";
  
    if (rata >= 80) {
      status = "Lulus";
      grade = "A";
      warna = "green";
    } else if (rata >= 70) {
      status = "Remedial";
      grade = "B";
      warna = "orange";
    } else {
      status = "Tidak Lulus";
      grade = "C";
      warna = "red";
    }
  
    // Simpan status dan grade ke localStorage
    localStorage.setItem("status", status);
    localStorage.setItem("grade", grade);
  
    const hasilDiv = document.getElementById("hasilQuiz");
    hasilDiv.innerHTML = `
      <p>Rata-rata: <strong>${rata}</strong></p>
      <p>Status: <strong>${status}</strong></p>
      <p>Grade: <strong>${grade}</strong></p>
    `;
    hasilDiv.style.color = warna;
  }
  
  function resetQuiz() {
    localStorage.clear();
    document.getElementById("hasilQuiz").innerHTML = "Hasil akan ditampilkan di sini...";
    document.getElementById("hasilQuiz").style.color = "black";
  }