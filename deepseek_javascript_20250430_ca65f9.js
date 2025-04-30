// Menu Mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Chargement des événements (exemple)
fetch('api/events.json')
    .then(response => response.json())
    .then(data => {
        // Intégrer les événements dans le DOM
    });