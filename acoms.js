// Add event listener to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
});

// Add event listener to form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    });
});

// Event calendar functionality
const eventCalendar = document.getElementById('event-calendar');
if (eventCalendar) {
    const events = [
        { date: '2024-10-25', title: 'Event 1' },
        { date: '2024-11-01', title: 'Event 2' },
    ];

    events.forEach((event) => {
        const eventElement = document.createElement('div');
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.date}</p>
        `;
        eventCalendar.appendChild(eventElement);
    });
}

// Resource library functionality
const resourceLibrary = document.getElementById('resource-library');
if (resourceLibrary) {
    const resources = [
        { title: 'Resource 1', link: '#' },
        { title: 'Resource 2', link: '#' },
    ];

    resources.forEach((resource) => {
        const resourceElement = document.createElement('div');
        resourceElement.innerHTML = `
            <h3>${resource.title}</h3>
            <a href="${resource.link}">Download</a>
        `;
        resourceLibrary.appendChild(resourceElement);
    });
}

// Forum functionality
const forum = document.getElementById('forum');
if (forum) {
    const threads = [
        { title: 'Thread 1', comments: 5 },
        { title: 'Thread 2', comments: 3 },
    ];

    threads.forEach((thread) => {
        const threadElement = document.createElement('div');
        threadElement.innerHTML = `
            <h3>${thread.title}</h3>
            <p>${thread.comments} comments</p>
        `;
        forum.appendChild(threadElement);
    });
}