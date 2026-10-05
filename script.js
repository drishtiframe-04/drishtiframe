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

document.querySelector('#contact-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formElement = event.currentTarget;
  const submitButton = formElement.querySelector('button[type="submit"]');
  const form = new FormData(formElement);
  form.append('_subject', `New Drishtiframe project enquiry — ${form.get('project')}`);
  form.append('_captcha', 'false');
  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = '…';
  try {
    const response = await fetch('https://formsubmit.co/ajax/drishtiframe@gmail.com', { method: 'POST', body: form, headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Submission failed');
    formElement.reset();
    document.querySelector('#success-modal').hidden = false;
  } catch (error) {
    window.alert('We could not send your message right now. Please email drishtiframe@gmail.com directly.');
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('span').textContent = '↗';
  }
});

document.querySelectorAll('.modal-close, .modal-action').forEach((button) => {
  button.addEventListener('click', () => { document.querySelector('#success-modal').hidden = true; });
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
