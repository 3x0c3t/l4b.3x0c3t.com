document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'interaction'],
        initialView: 'dayGridMonth', // Vue du mois complet
        editable: true,
        selectable: true,
        events: [
            // Exemple d'événements, à remplacer par des données dynamiques
            {
                title: 'Réunion',
                start: '2024-09-15',
                end: '2024-09-15'
            },
            {
                title: 'Cours de Yoga',
                start: '2024-09-20T10:00:00',
                end: '2024-09-20T11:00:00'
            }
        ],
        dateClick: function(info) {
            // Afficher un formulaire de réservation ou un modal lorsque la date est cliquée
            var title = prompt('Titre de l\'événement:');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: info.dateStr,
                    allDay: true
                });
            }
        },
        eventClick: function(info) {
            // Afficher les détails de l'événement ou le modifier
            alert('Événement: ' + info.event.title);
        }
    });

    calendar.render();
});
