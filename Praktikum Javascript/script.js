document.getElementById('gradeForm').addEventListener('submit', function(event) {
		event.preventDefault(); // Mencegah pengiriman formulir

		// Mengambil nilai input
		const assignment = parseFloat(document.getElementById('assignment').value);
		const uts = parseFloat(document.getElementById('uts').value);
		const uas = parseFloat(document.getElementById('uas').value);

		// Validasi input
		if (assignment < 0 || assignment > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
				alert("Silakan masukkan nilai yang valid antara 0 dan 100.");
				return;
		}

		// Menghitung rata-rata tertimbang
		const weightedAverage = (assignment * 0.3) + (uts * 0.3) + (uas * 0.4);

		// Menentukan nilai huruf
		let letterGrade;
		if (weightedAverage >= 90) {
				letterGrade = 'A';
		} else if (weightedAverage >= 80) {
				letterGrade = 'B';
		} else if (weightedAverage >= 70) {
				letterGrade = 'C';
		} else if (weightedAverage >= 60) {
				letterGrade = 'D';
		} else {
				letterGrade = 'E';
		}

		// Menampilkan hasil
		document.getElementById('result').innerText = `Rata-rata Tertimbang: ${weightedAverage.toFixed(2)} - Nilai: ${letterGrade}`;

		// Menampilkan status lulus/gagal
		const status = weightedAverage >= 60 ? "Status: Lulus" : "Status: Gagal";
		document.getElementById('status').innerText = status;
		document.getElementById('status').className = weightedAverage >= 60 ? 'lulus' : 'gagal';
});
