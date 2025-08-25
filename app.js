// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const xIcon = document.getElementById('x-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-nav-hidden');
    menuIcon.classList.toggle('hidden');
    xIcon.classList.toggle('hidden');
});

// Hide menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('mobile-nav-hidden');
        menuIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
    });
});

// Modal functionality
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');
const projectButtons = document.querySelectorAll('.project-btn');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

const projectData = {
    1: {
        title: 'Core Java Application',
        description: 'This foundational project demonstrates a deep understanding of core programming principles and object-oriented design in Java. It covers concepts such as inheritance, polymorphism, abstract classes, and multithreading, showcasing a strong grasp of the fundamentals required for robust software development.'
    },
    2: {
        title: 'Creative Food Website',
        description: 'I created an attractive and functional website for a food business using modern web technologies. The site features a clean, responsive design, an interactive menu with image galleries, and a fully functional contact form to enhance the user experience and drive customer engagement.'
    },
    3: {
        title: 'Interactive AI with PHP & Python',
        description: 'This ambitious project combines frontend and backend technologies with intelligent systems. I used PHP to handle server-side logic and Python for a machine learning model. The result is an interactive AI that responds to user input, demonstrating my ability to integrate disparate technologies and develop complex, intelligent systems.'
    },
    4: {
        title: 'Software Testing & QA',
        description: 'For this project, I built a dedicated website and then rigorously tested it using a variety of methodologies. I conducted both automated and manual tests, identified key bugs, and documented the findings. This highlights my commitment to quality assurance and my systematic approach to ensuring software reliability and performance.'
    },
    5: {
        title: 'AI-Powered Android App',
        description: 'This mobile application for the Android platform integrates an AI component to provide a smart and interactive user experience. The app was developed from concept to deployment, showcasing my ability to work with mobile development frameworks and leverage AI to create a next-generation application.'
    }
};

// Event listeners for project buttons
projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.dataset.projectId;
        const project = projectData[projectId];
        if (project) {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modal.style.display = 'block';
        }
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
