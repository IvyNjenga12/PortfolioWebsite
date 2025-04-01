// Dynamic Greeting
function getGreeting() {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
    document.querySelector('.hero-content h1').textContent = greeting + ' - Welcome to My Portfolio';
}
window.onload = getGreeting;

// Theme Toggle (Light/Dark Mode)
const toggleButton = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    document.body.classList.add(storedTheme);
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
});

// Portfolio Filter
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Blog Manager (Example JSON)
const blogPosts = [
    { title: "My Latest Project", date: "March 2025", content: "Details about the project..." },
    { title: "Design Trends 2025", date: "February 2025", content: "What's trending in design..." }
];
function loadBlogs() {
    const blogList = document.getElementById('blog-list');
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.date}</p>
            <p>${post.content}</p>
        `;
        blogList.appendChild(postElement);
    });
}
window.onload = loadBlogs;
