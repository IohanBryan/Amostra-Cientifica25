function toggleMenu() {
  document.querySelector('nav').classList.toggle('active');
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }

    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });

  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});


const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

function updateThemeIcon() {
  const iconSun = themeToggle.querySelector('.icon-sun');
  const iconMoon = themeToggle.querySelector('.icon-moon');

  if (body.classList.contains('dark')) {
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  } else {
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  }
}

updateThemeIcon();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    body.classList.contains('dark') ? 'dark' : 'light'
  );
  updateThemeIcon();
});