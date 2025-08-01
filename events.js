document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.querySelector('.events__grid');

    // Mock event data
    const events = {
        1: { title: 'Art Show', date: '2024-09-24' },
        2: { title: 'Food Festival', date: '2024-09-25' },
        3: { title: 'Weddings', date: '2024-09-27' },
        4: { title: 'Concerts', date: '2024-09-29' }
    };

    // Generate event cards
    Object.entries(events).forEach(([id, event]) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event__card';
        eventCard.innerHTML = `
            <img src="path/to/image.jpg" alt="${event.title}" class="event__image">
            <h3>${event.title}</h3>
            <p>${event.description || 'Description not available'}</p>
            <small>Date: ${event.date}</small>
            <button class="btn" onclick="window.location.href='booking.html?event=${id}'">Book Now</button>
        `;
        eventsContainer.appendChild(eventCard);
    });
});
