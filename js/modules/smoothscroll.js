export default function initScrollTo(){
    const linksInterno = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
  
    function scrollToSection(event){
      event.preventDefault();
      linksInterno.forEach(link => link.classList.remove('ativo'))
      this.classList.add('ativo');
      const href = this.getAttribute('href');
      const section = document.querySelector(href);
      // const topo = section.offsetTop;
  
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth'
      // })
    }
  
    linksInterno.forEach((link) =>{
      link.addEventListener('click', scrollToSection);
    });
  }