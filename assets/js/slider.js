let index = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === n);
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  index = (index === 0) ? slides.length - 1 : index - 1;
  updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});

function updateSlider() {
  const offset = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
  showSlide(index);
}

updateSlider();
