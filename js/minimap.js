document.addEventListener("DOMContentLoaded", function() {
    // Ініціалізація карти
    var map = L.map('map').setView([50.4501, 30.5234], 13); // Координати Києва

    // Додамо базову карту OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Додамо маркер
    L.marker([50.4501, 30.5234]).addTo(map)
        .bindPopup('Ringly: вул. Технологічна, 23, Київ, Україна')
        .openPopup();
});
