const navOpen = document.querySelector('.open');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close');

navOpen.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundcolor = '#fff';
    navbar.style.boxShadow = '0 0px 10px 0 #00000033';
  } else {
    navbar.style.backgroundcolor = 'transparent';
    navbar.style.boxShadow = 'none';
  }
});
