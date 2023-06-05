const ScrollBehavior = {
  init() {
    this.bind();
  },
  bind() {
    this.bindScrollClick(document.querySelectorAll('a[href^="#"]'));

    window.addEventListener('scroll', () => {
      this.checkActiveNav();
    });  
  },
  bindScrollClick(anchors) {
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  },
  checkActiveNav() {
    // set active navigation anchor list by the scroll position
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('nav a');
    const scrollPosition = window.pageYOffset;
    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop - 50) {
        navAnchors.forEach(anchor => {
          anchor.classList.remove('active');
          if (anchor.getAttribute('href') === `#${section.getAttribute('id')}`) {
            anchor.classList.add('active');
          }
        });
      }
    });
  }
};

export default ScrollBehavior;