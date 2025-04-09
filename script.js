function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
    document.querySelector('.hero-content h1').textContent = `${greeting} - Welcome to My Portfolio`;
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = (category === 'all' || project.classList.contains(category)) ? 'block' : 'none';
    });
}

const blogPosts = [
    { title: "My Latest Project", date: "March 2025", content: "Details about the project..." },
    { title: "Design Trends 2025", date: "February 2025", content: "What's trending in design..." }
];

function loadBlogs() {
    const blogList = document.getElementById('blog-list');
    blogPosts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('blog-post');
        postEl.innerHTML = `<h3>${post.title}</h3><p>${post.date}</p><p>${post.content}</p>`;
        blogList.appendChild(postEl);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;
    sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollY >= offset && scrollY < offset + height) {
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) a.classList.add('active');
            });
        }
    });
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    }
}

function initLightbox() {
    const images = document.querySelectorAll('.project-img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            const imgEl = document.createElement('img');
            imgEl.src = img.src;
            lightbox.innerHTML = '';
            lightbox.appendChild(imgEl);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

function openModal(content) {
    const modal = document.getElementById('modal');
    modal.querySelector('.modal-body').innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const value = bar.dataset.progress;
        bar.style.width = value + '%';
    });
}

function startCountdown(targetDate) {
    const countdown = document.getElementById('countdown');
    const target = new Date(targetDate).getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;
        if (distance < 0) {
            countdown.textContent = "Launched!";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function enableDragAndDrop() {
    const container = document.getElementById('projects');
    let dragged;

    container.addEventListener('dragstart', e => {
        if (e.target.classList.contains('project')) {
            dragged = e.target;
            e.target.style.opacity = 0.5;
        }
    });

    container.addEventListener('dragend', e => {
        e.target.style.opacity = '';
    });

    container.addEventListener('dragover', e => {
        e.preventDefault();
    });

    container.addEventListener('drop', e => {
        e.preventDefault();
        if (e.target.classList.contains('project') && dragged !== e.target) {
            container.insertBefore(dragged, e.target.nextSibling);
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    loadBlogs();
    loadTheme();
    initLightbox();
    animateProgressBars();
    startCountdown("2025-12-31T23:59:59"); // Customize your date
    enableDragAndDrop();
    updateActiveNav();
});

window.addEventListener('scroll', updateActiveNav);
function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = progress + '%';
  });
}

window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    animateProgressBars();
  }
});

