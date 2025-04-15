document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
      });
    }
  });
  
//  dark mode toggle

const [open, setOpen] = useState(false);

const toggleMenu = () => {
  setOpen(!open);
};

  