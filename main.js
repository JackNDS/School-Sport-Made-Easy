const menu = document.getElementById('mobile-menu');
const mobilebtn = document.querySelector('.mobile-btn');

function navToggle() {
    menu.classList.toggle('open');
    mobilebtn.classList.toggle('is-menu-open');
    document.body.classList.toggle('no-scroll');
  }
  
  mobilebtn.addEventListener('click', navToggle);

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const slider = document.querySelector(".testimonial-slider");
  let slideIndex = 0;
  
  prev.addEventListener("click", () => {
      slideIndex--;
      if (slideIndex < 0) {
          slideIndex = 0;
      }
      updateSlider();
  });
  
  next.addEventListener("click", () => {
      slideIndex++;
      if (slideIndex > slider.childElementCount - 3) {
          slideIndex = slider.childElementCount - 3;
      }
      updateSlider();
  });
  
  function updateSlider() {
      slider.style.transform = `translateX(-${slideIndex * (100 / 6)}%)`;
  }

  function toggleAnswer(element) {
    const arrow = element.querySelector('.arrow');
    const answer = element.nextElementSibling;
    const isOpening = answer.style.maxHeight === '0px' || answer.style.maxHeight === '';
  
    arrow.classList.toggle('rotated');
    answer.style.maxHeight = isOpening ? `${answer.scrollHeight}px` : '0px';
  }
  
  