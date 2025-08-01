document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');

    // Corrected event data with consistent date format
    const events = {
        1: { title: 'Art Show', date: '2024-09-24' },
        2: { title: 'Food Festival', date: '2024-09-25' },
        3: { title: 'Weddings', date: '2024-09-27' },
        4: { title: 'Concerts', date: '2024-09-29' }
    };

    const eventNameInput = document.getElementById('event-name');
    const eventDateInput = document.getElementById('date');

    if (eventId && events[eventId]) {
        const event = events[eventId];
        eventNameInput.value = event.title;
        eventDateInput.value = event.date;
    }

    document.getElementById('booking-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const selectedEvent = events[eventId];
        const inputName = eventNameInput.value.trim();
        const inputDate = eventDateInput.value.trim();

        alert(`Tickets for ${inputName} booked successfully!`);
        window.location.href = 'events.html';
    });
});
