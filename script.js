const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal, .trust, .position-grid, .service-card, .process-step, .project, .team-portrait, .proof-grid').forEach((el) => observer.observe(el));

document.querySelectorAll('.process-step').forEach((step) => {
  step.addEventListener('mouseenter', () => {
    document.querySelectorAll('.process-step').forEach((item) => item.classList.remove('active'));
    step.classList.add('active');
  });
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`New Drishtiframe project enquiry — ${form.get('project')}`);
  const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nProject type: ${form.get('project')}\n\nProject details:\n${form.get('message')}`);
  window.location.href = `mailto:drishtiframe@gmail.com?subject=${subject}&body=${body}`;
});

const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navLinks.style.display = open ? 'flex' : '';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '72px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.padding = '25px 6vw';
  navLinks.style.background = '#101112';
  navLinks.style.flexDirection = 'column';
});
