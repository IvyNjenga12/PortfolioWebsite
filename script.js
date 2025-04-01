// Dynamic Greeting
function updateGreeting() {
    let hour = new Date().getHours();
    let greeting = "Welcome!";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    document.getElementById("greeting").textContent = greeting;
}
updateGreeting();

// Portfolio Items
const projects = [
    { title: "Web App", category: "Web" },
    { title: "AI Model", category: "AI" },
    { title: "Data Analysis", category: "Data" }
];

function loadProjects() {
    let container = document.getElementById("portfolio-items");
    container.innerHTML = "";
    projects.forEach(project => {
        let div = document.createElement("div");
        div.textContent = project.title;
        container.appendChild(div);
    });
}
loadProjects();

// Blog Posts
const blogPosts = [
    { title: "First Blog Post", content: "This is my first post!" },
    { title: "Second Blog Post", content: "Another blog update." }
];

function loadBlogPosts() {
    let container = document.getElementById("blog-list");
    container.innerHTML = "";
    blogPosts.forEach(post => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        container.appendChild(div);
    });
}
loadBlogPosts();

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    if (name === "" || email === "") {
        alert("All fields are required!");
        return;
    }
    alert("Message sent!");
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});
