let currentIndex = 0;

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Re-fetch currently visible images only
  const visibleImages = Array.from(document.querySelectorAll('.gallery .image'))
    .filter(img => img.style.display !== 'none');

  currentIndex = visibleImages.findIndex(img => img.src === src);
  lightboxImg.src = src;
  lightbox.style.display = 'flex';

  // Save for navigation
  window.visibleImages = visibleImages;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  if (!window.visibleImages) return;

  currentIndex = (currentIndex + 1) % window.visibleImages.length;
  document.getElementById('lightbox-img').src = window.visibleImages[currentIndex].src;
}

function prevImage() {
  if (!window.visibleImages) return;

  currentIndex = (currentIndex - 1 + window.visibleImages.length) % window.visibleImages.length;
  document.getElementById('lightbox-img').src = window.visibleImages[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .image');

  allImages.forEach(img => {
    img.style.display = (category === 'all' || img.classList.contains(category)) ? 'block' : 'none';
  });

  // Reset visibleImages list
  window.visibleImages = Array.from(document.querySelectorAll('.gallery .image'))
    .filter(img => img.style.display !== 'none');
}