function showWhatsAppAlert() {
  const whatsappLink1 = 'http://wa.me/6282198166883';
  const whatsappLink2 = 'http://wa.me/6281390932149';
  const whatsappLink3 = 'http://wa.me/628137075361';

  // Membuat elemen div untuk menampilkan alert
  const alertDiv = document.createElement('div');
  alertDiv.style.position = 'fixed';
  alertDiv.style.left = '50%';
  alertDiv.style.top = '50%';
  alertDiv.style.transform = 'translate(-50%, -50%)';
  alertDiv.style.padding = '20px';
  alertDiv.style.backgroundColor = '#fff';
  alertDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  alertDiv.style.border = '1px solid #ccc';
  alertDiv.style.zIndex = '1000';
  alertDiv.style.borderRadius = '15px';

  // Menambahkan pesan ke dalam div
  alertDiv.innerHTML = `
        <p>Klik link berikut untuk membuka WhatsApp:</p>
        <p>Kezia : <a href="${whatsappLink1}" target="_blank">${whatsappLink1}</a></p>
        <p>Diah : <a href="${whatsappLink2}" target="_blank">${whatsappLink2}</a></p>
        <p>Alvin : <a href="${whatsappLink3}" target="_blank">${whatsappLink3}</a></p>
        <button onclick="closeAlert()">Tutup</button>
    `;

  // Menambahkan div ke dalam body
  document.body.appendChild(alertDiv);
}

function closeAlert() {
  // Menghapus elemen div alert dari body
  const alertDiv = document.querySelector('div[style*="fixed"]');
  if (alertDiv) {
    document.body.removeChild(alertDiv);
  }
}
