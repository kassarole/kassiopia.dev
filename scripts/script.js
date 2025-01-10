const folderNavigationElement = document.getElementById('folder-navigation');
const galleryElement = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImageIndex = -1;

// Function to populate the folder navigation
function populateFolderNavigation() {
    folders.forEach(folder => {
        const folderLink = document.createElement('a');
        folderLink.href = '#';
        folderLink.textContent = folder.name;
        folderLink.addEventListener('click', () => loadImages(folder));
        folderNavigationElement.appendChild(folderLink);
    });
}

// Function to load images from the selected folder
function loadImages(folder) {
    galleryElement.innerHTML = ''; // Clear the gallery

    // Reverse the images array to load in reverse order
    const reversedImages = [...folder.images].reverse();

    reversedImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `${folder.path}/${image}`;
        imgElement.alt = image;
        imgElement.loading = 'lazy';
        imgElement.addEventListener('click', () => openLightbox(index, folder));

        galleryElement.appendChild(imgElement);
    });
}

// Function to open the lightbox
function openLightbox(index, folder) {
    currentImageIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = `${folder.path}/${folder.images[folder.images.length - 1 - currentImageIndex]}`;  // Reverse the index when opening
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    currentImageIndex = -1;
}

// Function to navigate through the images in the lightbox
function navigateLightbox(direction, folder) {
    if (currentImageIndex === -1) return;

    currentImageIndex = (currentImageIndex + direction + folder.images.length) % folder.images.length;
    lightboxImg.src = `${folder.path}/${folder.images[folder.images.length - 1 - currentImageIndex]}`;  // Reverse the index when navigating
}

// Event listeners for lightbox controls
lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => {
    if (lightbox.style.display === 'flex') {
        switch (event.key) {
            case 'ArrowRight':
                navigateLightbox(1, folders[currentImageIndex]);
                break;
            case 'ArrowLeft':
                navigateLightbox(-1, folders[currentImageIndex]);
                break;
            case 'Escape':
                closeLightbox();
                break;
        }
    }
});

// Initialize the gallery by populating folder navigation
document.addEventListener('DOMContentLoaded', () => {
    populateFolderNavigation();
    // Optionally load images from the first folder by default
    if (folders.length > 0) {
        loadImages(folders[0]);
    }
});
