// Dynamic Greeting
function getGreeting() {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
    document.getElementById('greeting').textContent = greeting + " - Welcome to My Portfolio";
}
window.onload = getGreeting;

// Portfolio Filter
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = (category === 'all' || project.classList.contains(category)) ? 'block' : 'none';
    });
}

// Blog Manager
const blogPosts = [
    { title: "My Latest Project", date: "March 2025", content: "Details about the project..." },
    { title: "Design Trends 2025", date: "February 2025", content: "What's trending in design..." }
];
function loadBlogs() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = ""; 
    blogPosts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.date}</p><p>${post.content}</p>`;
        blogList.appendChild(postElement);
    });
}
window.onload = () => {
    getGreeting();
    loadBlogs();
};
