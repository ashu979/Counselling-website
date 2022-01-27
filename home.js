const popMenu = document.querySelector('.mybar');
const popNav = document.querySelector('.mynav');
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

let chk = 1;
popMenu.addEventListener('click', () => {
    if(chk%2)
        popNav.style.display = 'block';
    else
        popNav.style.display = 'none';
    chk++;
});
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });
