document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Greeting
    const greetingElement = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greetingText = "Welcome!";
    if (hours < 12) greetingText = "Good Morning!";
    else if (hours < 18) greetingText = "Good Afternoon!";
    else greetingText = "Good Evening!";
    greetingElement.textContent = greetingText;

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });

    // Portfolio Filter
    const filters = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".portfolio-item");

    filters.forEach(filter => {
        filter.addEventListener("click", function() {
            const category = filter.getAttribute("data-filter");
            items.forEach(item => {
                item.style.display = category === "all" || item.getAttribute("data-category") === category ? "block" : "none";
            });
        });
    });

    // Blog Manager
    const blogPosts = [
        { title: "My First Blog Post", content: "This is an amazing post!" },
        { title: "Another Day in Web Dev", content: "Frontend is fun!" }
    ];
    const blogList = document.getElementById("blog-list");
    blogPosts.forEach(post => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogList.appendChild(div);
    });

    // Form Validation
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
});
