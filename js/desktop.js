const windowTemplates = {
    command: {
        title: 'Command Prompt',
        content: `
            <pre class="command-prompt">Microsoft Windows XP [Version 5.1.2600] 
            &#10094;C&#10095; Copyright 1985-2001 Microsoft Corp.
            <br>C:\\WINDOWS\\SYSTEM32> TYPE WELCOME.TXT

            Kassiopia's Space
            <br>I began work on this site as something to tinker with as well as to post some of my projects and photos I take.
            <br>It's a constant work in progress as I try, add, and remove things but, it'll always have the complete and total archive of my edited photos. Enjoy!
            </pre>`,
        width: '800px',
        height: '400px'  // Standard CMD height
    },
    about: {
        title: 'Command Prompt',
        content: `
                <pre class="command-prompt">Microsoft Windows XP [Version 5.1.2600] 
&#10094;C&#10095; Copyright 1985-2001 Microsoft Corp.
<br>C:&#92;WINDOWS&#92;SYSTEM32> TYPE ABOUT.TXT

Hiya I'm Kassiopia. I'm a former mobile forensics researcher currently working as a cloud engineer. I spend a lot of time traveling and have an active interest in photography and vintage tech.          
<br>You can also find me here:
- Twitter: <a href="https://twitter.com/_kassarole" target="_blank">@_kassarole</a>
- Bluesky: <a href="https://bsky.app/profile/fauxkassarole.bsky.social" target="_blank">@fauxkassarole.bsky.social</a>
- Tumblr: <a href="https://fauxkassarole.tumblr.com" target="_blank">fauxkassarole.tumblr.com</a>
- Blog: <a href="https://blog.kassiopia.dev" target="_blank">blog.kassiopia.dev</a></pre>`,
        width: '800px',
        height: '400px'  // Same as command
    },
    projects: {
        title: 'Command Prompt',
        content: `
            <pre class="command-prompt">Microsoft Windows XP [Version 5.1.2600] 
&#10094;C&#10095; Copyright 1985-2001 Microsoft Corp.
      <br>C:&#92;WINDOWS&#92;SYSTEM32> TYPE PROJECTS.TXT
      
From time to time I like to release the utilities I've written. These can be found below:          
- <a href="https://git.basedzone.xyz/kass/music-organizer" target="_blank">Music Organizer</a>
    - This is a python script for automatically identifying and organizing music downloaded with <a href="https://github.com/spotDL/spotify-downloader">SpotDL</a>.
- <a href="https://git.basedzone.xyz/kass/ebook-downloader" target="_blank">eBook Downloader</a>
    - This is a python script for searching for and then downloading books from libgen. It has a simple web UI and a CLI version.
- <a href="https://git.basedzone.xyz/kass/MVIMG_Carving" target="_blank">MVIMG Carving</a>
    - This is a python script for extracting the video segments from Android Motion Videos (Android version of Live Photos).
- Untitled Game Project
    - Not much to say about this right now. I'm working on it with my partner and may have little screenshots and notes to share about it.
I  also occasionally post blog posts. Some of those can be seen linked below or the whole blog can be viewed at <a href="https://blog.kassiopia.dev">https://blog.kassiopia.dev</a>
    - <a href="https://blog.kassiopia.dev/?p=177">SANS Holiday Hack 2024</a>
    - <a href="https://blog.kassiopia.dev/?p=164">TRS 80 Model 100</a>
    - <a href="https://blog.kassiopia.dev/?p=105">SANS Holiday Hack 2023</a>
    - <a href="https://blog.kassiopia.dev/?p=27">Ersatz TV Setup Guide</a>
    </pre>`,
        width: '800px',
        height: '600px'  // Taller for more content
    },
    photos: {
        title: 'Windows Picture and Fax Viewer',
        content: `
        <div class="photo-viewer">
            <div class="toolbar">
                <div class="toolbar-group">
                    <button class="prev-button" aria-label="Previous">
                        <img src="images/prev.png" alt="Previous">
                        <span>Previous</span>
                    </button>
                    <button class="next-button" aria-label="Next">
                        <img src="images/next.png" alt="Next">
                        <span>Next</span>
                    </button>
                </div>
                <div class="toolbar-separator"></div>
                <div class="toolbar-group">
                    <button class="view-button" aria-label="View">
                        <img src="images/gallery.png" alt="Gallery">
                        <span>Gallery View</span>
                    </button>
                </div>
                <div class="toolbar-separator"></div>
                <div class="toolbar-group">
                    <button class="zoom-in" aria-label="Zoom In">
                        <img src="images/zoom-in.png" alt="Zoom In">
                        <span>Zoom In</span>
                    </button>
                    <button class="zoom-out" aria-label="Zoom Out">
                        <img src="images/zoom-out.png" alt="Zoom Out">
                        <span>Zoom Out</span>
                    </button>
                </div>
            </div>
            <div class="photo-container">
                <div class="single-view active">
                    <img id="current-photo" src="" alt="Current photo">
                </div>
                <div class="gallery-view">
                    <div id="photo-grid"></div>
                </div>
            </div>
            <div class="photo-info">
                <span id="photo-count">Photo 1 of 1</span>
                <span id="photo-name">Loading...</span>
            </div>
        </div>`,
        width: '750px',  // Updated width
        height: '550px'  // Updated height to match XP photo viewer
    },
    pinball: {
        title: 'Space Cadet Pinball',
        content: `
            <div class="iframe-container">
            <iframe src="https://alula.github.io/SpaceCadetPinball/" title="Pinball Game" allowfullscreen></iframe>
            </div>`,
        width: '616px',
        height: '500px'  // Match game dimensions
    },
    credits: {
        title: 'Credits',
        content: `
            <pre class="command-prompt">Microsoft Windows XP [Version 5.1.2600]
&#10094;C&#10095; Copyright 1985-2001 Microsoft Corp.
<br>C:&#92;WINDOWS&#92;SYSTEM32> TYPE CREDITS.TXT
- Pinball game from <a href="https://alula.github.io/SpaceCadetPinball/" target="_blank">alula.github.io</a>
- Spider Solitaire from <a href="https://games.gameboss.com/spidersolitairewindowsxp/index.html?lang=en" target="_blank">games.gameboss.com</a>
- Built using <a href="https://botoxparty.github.io/XP.css/">xp.css</a>
</pre>`,
        width: '800px',
        height: '400px'  // Standard CMD height
    },
    spider: {
        title: 'Spider Solitaire',
        content: `
            <div class="iframe-container spider">
                <iframe 
                    src="https://games.gameboss.com/spidersolitairewindowsxp/index.html?lang=en" 
                    title="Spider Solitaire" 
                    frameborder="0"
                    scrolling="no"
                    allow="fullscreen"
                    sandbox="allow-scripts allow-same-origin allow-modals">
                </iframe>
            </div>`,
        width: '580px',
        height: '375px'  // Match game dimensions
    },
    notepad: {
        title: 'Untitled - Notepad',
        content: `
            <div class="notepad-container">
                <div class="notepad-menu">
                    <div class="menu-bar">
                        <button>File</button>
                        <button>Edit</button>
                        <button>Format</button>
                        <button>View</button>
                        <button>Help</button>
                    </div>
                </div>
                <div class="notepad-content">
                    <div class="notepad-text">
0418/25:
- Going to a concert tonight
- The game is going well, NPCs are in now but we need to adjust the navmesh. It's almost time to actually start making the game loop and seeing if the idea is even fun to play.
- I have glasses now which is nice
- I wish I brought my camera with me, I miss taking photos.
04/16/25:
- Still in Michigan, It's nice here.
- Added this notepad window for displaying updates
- Some new updates to the untitled game. We're approaching being able to test the game loop and see if this is even fun. Feels kinda cool
</div>
                </div>
            </div>`,
        width: '600px',
        height: '400px'
    },
};

function createOrFocusWindow(windowType) {
    const existingWindow = document.querySelector(`#window-${windowType}`);
    if (existingWindow) {
        focusWindow(existingWindow);
        return;
    }

    const windowEl = createWindow(windowType);

    // Add to taskbar
    const taskbarButton = document.createElement('button');
    taskbarButton.className = 'taskbar-button active';
    taskbarButton.id = `taskbar-${windowType}`;
    taskbarButton.innerHTML = `
        <img src="images/${windowType}.png" alt="${windowTemplates[windowType].title}">
        <span>${windowTemplates[windowType].title}</span>
    `;
    taskbarButton.addEventListener('click', () => {
        const win = document.querySelector(`#window-${windowType}`);
        if (win.classList.contains('minimized')) {
            minimizeWindow(windowType); // Restore
            focusWindow(win);
        } else if (win.classList.contains('active')) {
            minimizeWindow(windowType); // Minimize
        } else {
            focusWindow(win);
        }
    });
    document.querySelector('#taskbar').insertBefore(taskbarButton, document.querySelector('.system-tray'));

    // Add window to container
    document.getElementById('windows-container').appendChild(windowEl);
    dragElement(windowEl);
    
    // Initialize specific functionality
    if (windowType === 'photos') {
        setTimeout(() => initializePhotoViewer(windowEl), 0);
    } else if (windowType === 'pinball') {
        setTimeout(() => initializePinball(windowEl), 0);
    }

    focusWindow(windowEl);
    return windowEl;
}

function createWindow(windowType) {
    const template = windowTemplates[windowType];
    const windowEl = document.createElement('div');
    windowEl.id = `window-${windowType}`;
    windowEl.className = `window ${windowType}-window`;
    windowEl.style.width = template.width || '300px';
    windowEl.style.height = template.height || '200px';
    
    // Create window content with special case for photo viewer
    const windowBodyClass = windowType === 'photos' ? 'photo-window-body' : 'window-body';
    
    windowEl.innerHTML = `
        <div class="title-bar">
            <div class="title-bar-text">${template.title}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize" onclick="minimizeWindow('${windowType}')"></button>
                <button aria-label="Maximize" onclick="maximizeWindow('${windowType}')"></button>
                <button aria-label="Close" onclick="closeWindow('${windowType}')"></button>
            </div>
        </div>
        <div class="${windowBodyClass}">${template.content}</div>
    `;

    // Position window
    const windowCount = document.querySelectorAll('.window').length;
    windowEl.style.top = `${50 + (windowCount * 20)}px`;
    windowEl.style.left = `${50 + (windowCount * 20)}px`;

    // Add event listeners after the window is created
    if (windowType === 'photos') {
        const viewButton = windowEl.querySelector('.view-button');
        const prevButton = windowEl.querySelector('.prev-button');
        const nextButton = windowEl.querySelector('.next-button');
        const zoomInButton = windowEl.querySelector('.zoom-in');
        const zoomOutButton = windowEl.querySelector('.zoom-out');
        
        viewButton.addEventListener('click', toggleView);
        prevButton.addEventListener('click', previousPhoto);
        nextButton.addEventListener('click', nextPhoto);
        zoomInButton.addEventListener('click', zoomIn);
        zoomOutButton.addEventListener('click', zoomOut);
    }
    
    return windowEl;
}

// Define window control functions globally
window.minimizeWindow = function(windowType) {
    const windowEl = document.querySelector(`#window-${windowType}`);
    const taskbarButton = document.querySelector(`#taskbar-${windowType}`);
    if (windowEl) {
        windowEl.classList.toggle('minimized');
        taskbarButton.classList.toggle('active');
    }
}

window.maximizeWindow = function(windowType) {
    const windowEl = document.querySelector(`#window-${windowType}`);
    if (windowEl) {
        windowEl.classList.toggle('maximized');
        if (windowEl.classList.contains('maximized')) {
            windowEl.dataset.prevStyle = `top:${windowEl.style.top};left:${windowEl.style.left};width:${windowEl.style.width}`;
            windowEl.style.top = '0';
            windowEl.style.left = '0';
            windowEl.style.width = '100%';
            windowEl.style.height = 'calc(100vh - 30px)';
        } else {
            const prevStyle = windowEl.dataset.prevStyle.split(';');
            prevStyle.forEach(style => {
                const [prop, value] = style.split(':');
                windowEl.style[prop] = value;
            });
        }
    }
}

window.closeWindow = function(windowType) {
    const windowEl = document.querySelector(`#window-${windowType}`);
    const taskbarButton = document.querySelector(`#taskbar-${windowType}`);
    if (windowEl) {
        windowEl.remove();
        taskbarButton.remove();
    }
}

function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    startMenu.classList.toggle('visible');
}

function initializeStartMenu() {
    const startButton = document.querySelector('.start-button');
    const startMenu = document.getElementById('start-menu');
    
    startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStartMenu();
    });

    // Close start menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && !e.target.matches('.start-button')) {
            startMenu.classList.remove('visible');
        }
    });

    // Handle start menu item clicks
    document.querySelectorAll('.start-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const windowType = item.dataset.window;
            createOrFocusWindow(windowType);
            toggleStartMenu();
        });
    });
}

function initializeNetworkMenu() {
    const networkButton = document.querySelector('.network-button');
    const networkPopup = document.getElementById('network-popup');
    
    networkButton.addEventListener('click', (e) => {
        e.stopPropagation();
        networkPopup.classList.toggle('visible');
    });

    // Close network popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!networkPopup.contains(e.target) && !e.target.matches('.network-button')) {
            networkPopup.classList.remove('visible');
        }
    });
}

function initializeVolumeControl() {
    const volumeButton = document.querySelector('.volume-button');
    const volumePopup = document.getElementById('volume-popup');
    
    volumeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        volumePopup.classList.toggle('visible');
        // Hide network popup if open
        document.getElementById('network-popup').classList.remove('visible');
    });

    // Close volume popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!volumePopup.contains(e.target) && !e.target.matches('.volume-button')) {
            volumePopup.classList.remove('visible');
        }
    });
}

// Initialize desktop when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeStartMenu();
    initializeNetworkMenu();
    initializeVolumeControl();
    // Add click handlers for desktop icons
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const windowType = icon.dataset.window;
            createOrFocusWindow(windowType);
        });
    });
});

function initializePhotoViewer(windowEl) {
    let currentPhotoIndex = 0;
    let photos = [];
    let currentZoom = 1;
    let isGalleryView = false;

    // Get references to elements within this window
    const singleView = windowEl.querySelector('.single-view');
    const galleryView = windowEl.querySelector('.gallery-view');
    const currentPhoto = windowEl.querySelector('#current-photo');
    const photoGrid = windowEl.querySelector('#photo-grid');
    const photoName = windowEl.querySelector('#photo-name');
    const photoCount = windowEl.querySelector('#photo-count');

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
                createGalleryView();
            }
        } catch (error) {
            console.error('Error loading photos:', error);
        }
    }

    function displayPhoto(index) {
        const photo = photos[index];
        currentPhoto.src = photo.url;
        currentPhoto.style.transform = `scale(${currentZoom})`;
        photoName.textContent = photo.name;
        photoCount.textContent = `Photo ${currentPhotoIndex + 1} of ${photos.length}`;
        updateThumbnailSelection();
    }

    function toggleView() {
        isGalleryView = !isGalleryView;
        singleView.classList.toggle('active', !isGalleryView);
        galleryView.classList.toggle('active', isGalleryView);
        windowEl.querySelector('.view-button').textContent = 
            isGalleryView ? 'Single View' : 'Gallery View';
    }

    function createGalleryView() {
        photoGrid.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexWrap = 'wrap';
        wrapper.style.gap = '10px';
        
        photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.name;
            img.className = 'thumbnail';
            if (index === currentPhotoIndex) {
                img.classList.add('selected');
            }
            
            img.addEventListener('click', () => {
                currentPhotoIndex = index;
                displayPhoto(currentPhotoIndex);
                toggleView();
            });
            
            wrapper.appendChild(img);
        });
        
        photoGrid.appendChild(wrapper);
    }

    function updateThumbnailSelection() {
        photoGrid.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.classList.toggle('selected', index === currentPhotoIndex);
        });
    }

    // Add button event listeners
    windowEl.querySelector('.prev-button').addEventListener('click', () => {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--;
            displayPhoto(currentPhotoIndex);
        }
    });

    windowEl.querySelector('.next-button').addEventListener('click', () => {
        if (currentPhotoIndex < photos.length - 1) {
            currentPhotoIndex++;
            displayPhoto(currentPhotoIndex);
        }
    });

    windowEl.querySelector('.view-button').addEventListener('click', toggleView);

    windowEl.querySelector('.zoom-in').addEventListener('click', () => {
        if (currentZoom < 3) {
            currentZoom += 0.25;
            currentPhoto.style.transform = `scale(${currentZoom})`;
        }
    });

    windowEl.querySelector('.zoom-out').addEventListener('click', () => {
        if (currentZoom > 0.5) {
            currentZoom -= 0.25;
            currentPhoto.style.transform = `scale(${currentZoom})`;
        }
    });

    // Initialize photo viewer
    loadPhotos();
}

function initializePinball(windowEl) {
    const iframe = windowEl.querySelector('iframe');
    iframe.addEventListener('load', () => {
        iframe.contentWindow.focus();
    });
}

// Initialize desktop when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const windowType = icon.dataset.window;
            createOrFocusWindow(windowType);
        });
    });
});

// Make sure closeWindow is defined globally
window.closeWindow = function(windowType) {
    const windowEl = document.querySelector(`#window-${windowType}`);
    const taskbarButton = document.querySelector(`#taskbar-${windowType}`);
    if (windowEl) {
        windowEl.remove();
        taskbarButton.remove();
    }
}