const closeMenu = () => {
  if (window.screen.width <= 768) {
    let modal = document.body.style.overflow;
    hamburger.classList.toggle('hamburger--is-active');
    header.classList.toggle('header--is-active');
    (modal === 'hidden') ? modal = 'visible' : modal = 'hidden';
  }
};

export default closeMenu;
