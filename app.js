
const toggleDark = document.querySelector('.dark_lightBox'),
      body = document.querySelector('body'),
      nav = document.querySelector('nav'),
      toggleSearch = document.querySelector('.searchBox'),
      input = document.querySelector('.searchInput'),
      logo = document.querySelector(".sign"),
      menuBar = document.querySelector('.menu-bar');


      toggleDark.addEventListener('click', () => {
      	 toggleDark.classList.toggle('active');
      	 body.classList.toggle('darker');
      });

      toggleSearch.addEventListener('click', () => {
      	toggleSearch.classList.toggle('active');
      	input.classList.toggle('active');
      })

      // toggle the sideNavBar 
      logo.addEventListener('click', () => {
            nav.classList.toggle('show');
      })
      body.addEventListener('click', (e) => {
            let elem = e.target;
            if(!elem.classList.contains('.menu-bar') && !elem.classList.contains('logo')) {
                nav.elem.remove('show');
            }
      })