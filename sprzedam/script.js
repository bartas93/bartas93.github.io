const revealItems = document.querySelectorAll('.reveal');
const hero = document.querySelector('.hero');

function updateMobileCall() {
  document.body.classList.toggle('mobile-call-visible', window.scrollY > Math.min(hero.offsetHeight * 0.65, 650));
}

updateMobileCall();
window.addEventListener('scroll', updateMobileCall, { passive: true });

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const galleryItems = [...document.querySelectorAll('.gallery-item')];
const floorplan = document.querySelector('[data-floorplan]');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
const closeButton = lightbox.querySelector('.lightbox-close');
const previousButton = lightbox.querySelector('.lightbox-prev');
const nextButton = lightbox.querySelector('.lightbox-next');
let activeIndex = 0;
let activeTrigger = null;
let touchStartX = 0;

function showImage(index) {
  activeIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeIndex];
  lightboxImage.src = item.dataset.image;
  lightboxImage.alt = item.querySelector('img').alt;
  lightboxCaption.textContent = item.dataset.caption;
  previousButton.hidden = false;
  nextButton.hidden = false;
}

function openGallery(index) {
  activeTrigger = galleryItems[index];
  showImage(index);
  lightbox.showModal();
  document.body.classList.add('lightbox-open');
  closeButton.focus();
}

function openFloorplan() {
  activeTrigger = floorplan;
  lightboxImage.src = 'assets/rzut.png';
  lightboxImage.alt = 'Rzut mieszkania z wymiarami pomieszczeń';
  lightboxCaption.textContent = 'Rzut mieszkania — 41,95 m²';
  previousButton.hidden = true;
  nextButton.hidden = true;
  lightbox.showModal();
  document.body.classList.add('lightbox-open');
  closeButton.focus();
}

function closeLightbox() {
  lightbox.close();
}

galleryItems.forEach((item, index) => item.addEventListener('click', () => openGallery(index)));
floorplan.addEventListener('click', openFloorplan);
closeButton.addEventListener('click', closeLightbox);
previousButton.addEventListener('click', () => showImage(activeIndex - 1));
nextButton.addEventListener('click', () => showImage(activeIndex + 1));

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightbox.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  activeTrigger?.focus();
});

lightbox.addEventListener('keydown', (event) => {
  if (previousButton.hidden) return;
  if (event.key === 'ArrowLeft') showImage(activeIndex - 1);
  if (event.key === 'ArrowRight') showImage(activeIndex + 1);
});

lightbox.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchend', (event) => {
  if (previousButton.hidden) return;
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) < 55) return;
  showImage(distance > 0 ? activeIndex - 1 : activeIndex + 1);
}, { passive: true });
