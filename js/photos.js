let currentPhotoIndex = 0;
let photos = [];
let currentZoom = 1;
let isGalleryView = false;

async function loadPhotos() {
    const username = 'kassarole';
    const repo = 'kassiopia-photos';
    const path = 'photos';
    
    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repo}/contents/${path}`
        );
        const data = await response.json();
        
        photos = data
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name))
            .map(file => ({
                url: file.download_url,
                name: file.name
            }));
        
        if (photos.length > 0) {
            displayPhoto(currentPhotoIndex);
            updatePhotoCount();
            createGalleryView();
        }
    } catch (error) {
        console.error('Error loading photos:', error);
    }
}

function displayPhoto(index) {
    const photo = photos[index];
    const img = document.getElementById('current-photo');
    img.src = photo.url;
    img.style.transform = `scale(${currentZoom})`;
    document.getElementById('photo-name').textContent = photo.name;
    updatePhotoCount();
    updateThumbnailSelection();
}

function updatePhotoCount() {
    document.getElementById('photo-count').textContent = 
        `Photo ${currentPhotoIndex + 1} of ${photos.length}`;
}

function toggleView() {
    isGalleryView = !isGalleryView;
    document.querySelector('.single-view').classList.toggle('active', !isGalleryView);
    document.querySelector('.gallery-view').classList.toggle('active', isGalleryView);
    document.querySelector('.view-button').textContent = 
        isGalleryView ? 'Single View' : 'Gallery View';
}

function createGalleryView() {
    const grid = document.getElementById('photo-grid');
    grid.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.name;
        img.className = 'thumbnail';
        if (index === currentPhotoIndex) img.classList.add('selected');
        
        img.onclick = () => {
            currentPhotoIndex = index;
            displayPhoto(currentPhotoIndex);
            toggleView();
        };
        
        grid.appendChild(img);
    });
}

function updateThumbnailSelection() {
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('selected', index === currentPhotoIndex);
    });
}

function zoomIn() {
    if (currentZoom < 3) {
        currentZoom += 0.25;
        updateZoom();
    }
}

function zoomOut() {
    if (currentZoom > 0.5) {
        currentZoom -= 0.25;
        updateZoom();
    }
}

function updateZoom() {
    const img = document.getElementById('current-photo');
    img.style.transform = `scale(${currentZoom})`;
}

function nextPhoto() {
    if (currentPhotoIndex < photos.length - 1) {
        currentPhotoIndex++;
        displayPhoto(currentPhotoIndex);
    }
}

function previousPhoto() {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        displayPhoto(currentPhotoIndex);
    }
}

document.addEventListener('DOMContentLoaded', loadPhotos);