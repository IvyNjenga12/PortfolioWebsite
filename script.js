// Dynamic Greeting
function getGreeting() {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
    document.querySelector('.hero-content h1').textContent = greeting + ' - Welcome to My Portfolio';
}
window.onload = getGreeting;

// Live Clock
setInterval(() => {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}, 1000);

// Portfolio Filter
function filterProjects(category) {
    document.querySelectorAll('.project').forEach(project => {
        project.style.display = (category === 'all' || project.classList.contains(category)) ? 'block' : 'none';
    });
}

// Modal Popup
function openModal(title) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal').style.display = "block";
}
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Accordion
document.querySelector('.accordion-btn').addEventListener('click', function () {
    let content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// Drag & Drop (Example)
const projectsContainer = document.getElementById("projects");
new Sortable(projectsContainer, {
    animation: 150,
    ghostClass: 'sortable-ghost'
});
