const galleryElement = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentImageIndex = -1;

// Populate gallery
imageFilenames.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/Upload/${image}`;
    imgElement.alt = image;
    imgElement.loading = 'lazy';
    imgElement.addEventListener('click', () => openLightbox(index));

    galleryElement.appendChild(imgElement);
});

function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = `images/Upload/${imageFilenames[currentImageIndex]}`;
}

function closeLightbox() {
    lightbox.style.display = 'none';
    currentImageIndex = -1;
}

function navigateLightbox(direction) {
    if (currentImageIndex === -1) return;

    currentImageIndex = (currentImageIndex + direction + imageFilenames.length) % imageFilenames.length;
    lightboxImg.src = `images/Upload/${imageFilenames[currentImageIndex]}`;
}

// Event listeners for lightbox controls
lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => {
    if (lightbox.style.display === 'flex') {
        switch (event.key) {
            case 'ArrowRight':
                navigateLightbox(1);
                break;
            case 'ArrowLeft':
                navigateLightbox(-1);
                break;
            case 'Escape':
                closeLightbox();
                break;
        }
    }
});
