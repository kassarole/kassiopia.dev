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
- Facenook inspired by <a href="http://emilyisaway.com/facenook/" target="_blank">Emily is Away <3 by Kyle Seely</a>
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
    facenook: {
        title: 'Facenook - Kassiopia',
        content: `
        <div class="facenook-container">
            <div class="facenook-header">
                <img class="facenook-profile-pic" src="images/profile.png" alt="Profile Picture">
                <div class="facenook-profile-info">
                    <h2>Kassiopia</h2>
                    <span class="facenook-username">@kassarole</span>
                </div>
            </div>
            <div class="facenook-nav">
                <button data-tab="wall" class="active">Wall</button>
                <button data-tab="info">Info</button>
            </div>
            <div class="facenook-status-update" data-tab-content="wall">
                <input type="text" placeholder="What's on your mind, Kassiopia?" disabled>
                <button disabled>Post</button>
            </div>
            <div class="facenook-timeline" data-tab-content="wall">
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">July 22, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                    I've been hard at work on a handful of new projects. I've started migrating all of my homelab hosts over to NixOS and I think I'll probably write a full blog about the process. I've also been trying to learn PCB design. I built a simple carrier board for an unreleased project that I should hopefully be able to publish soon and, over the past weekend, I designed my first full board. I'm still waiting for the full pricing back on what it'll cost to manufacture. I'd still like to get back to game development but there's only so much time in the day. Fingers crossed I can free up some more time for that soon. I also have a few more ideas for things to add here to this site but I've also been worried this site is starting to become a bit of a pain to navigate. I still enjoy the design but I've been debating moving it to a subdomain and writing a more simple and text focussed site as the main page. Still unsure what's better.
                    </div>
                </div>
            <div class="facenook-timeline" data-tab-content="wall">
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">July 2, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                    Info tab is added and I'm removing the old about and projects buttons in favor of it. I ended up not moving photos because I still like the old viewer and I don't want this site to just all be on this one item. I like having a few distinct apps you open to view different things. On other projects, I've started migrating more things to nixos. I'm liking it so far and using flakes has made deployment a lot simpler. Might write a blog or something about it soon who knows.
                    </div>
                </div>
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">June 27, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                    New major feature thing added! The chat room should allow anyone who happens to visit to set a nickname and chat with anybody else here. It's kinda basic right now but I may add more to it later. GF and I have also been working on hardware type stuff again. I ordered some PCBs for a project last night, first time ever designing one and I'm terrified I did something wrong but no real way to tell until they get here. I also went and saw The Phonecian Scheme tonight. Loved it highly recommend. Next major thing will be the upgrades to this part of the site I talked about in the below post.
                    </div>
                </div>
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">June 27, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                        I took some new photos! There's like 10 birds nests in the tree outside my new place and I was able to get some photos of them that I'm happy with. I also finally updated the old notepad view of these notes into something I hope is more aesthically pleasing. Emily is Away is probably one of the most important games/series to me up with VA-11 Hall-A and If Found (Play all of these if you haven't). I think I'll probably end up moving my photos, projects, and about sections here too but I need to plan the layouts for those pages still. There's still one more big thing I want to add to this site but I'm still working on that part so uhh stay tuned. I'm also working on some larger blog posts for my main blog but progress there has been kinda slow. Generally it feels good to be posting again and hopefully I can get a regualr cadence going. We'll see how that all shakes out.
                    </div>
                </div>
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">June 16, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                        Oops I forgot to update this for a month again. I moved! Servers made it through the move which is great but my UPS died. House is really coming together, we have a nice space for hardware projects now. I want to start posting again and may just start blogging more in general. Maybe I need to just move more things here instead. I had an idea for a new thing on this site so maybe I'll start on that after work today. Also need to work more on AnimalChat and start making the frontend for that. Hopefully more photos soon!
                    </div>
                </div>
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">May 17, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                        Long time no talk. Been packing, I move in like 2 days. Game progress slowed because of this which kinda blows. We still need to fix the nav-meshes and then start implementing the actual game loop. Also think my code for culling the enemies after they die is broken so I need to look at that. Tomorrow I've gotta go through and turn down all the services I have here. Also think I'm gonna unrack 2 of the servers since they just kinda sit on shelves. A bit worried about having to ship them with the drives inside but they made it here from Vermont fine so I'm rolling the dice. Lastly, I fixed the photo order!
                    </div>
                </div>
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">April 18, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                        Going to a concert tonight! The game is going well, NPCs are in now but we need to adjust the navmesh. It's almost time to actually start making the game loop and see if the idea is even fun to play. I have glasses now which is nice. I wish I brought my camera with me, I miss taking photos.
                    </div>
                </div>
                <div class="facenook-post">
                    <div class="facenook-post-header">
                        <img class="facenook-post-pic" src="images/profile.png" alt="Profile Picture">
                        <div>
                            <span class="facenook-post-author">Kassiopia</span>
                            <span class="facenook-post-date">April 16, 2025</span>
                        </div>
                    </div>
                    <div class="facenook-post-content">
                        Still in Michigan, It's nice here. Added this notepad window for displaying updates. Some new updates to the untitled game. We're approaching being able to test the game loop and see if this is even fun. Feels kinda cool!
                    </div>
                </div>
            </div>
            <div class="facenook-info" data-tab-content="info" style="display:none;">
    <div class="facenook-profile-content">
        <div class="facenook-profile-main">
            <img class="facenook-profile-pic-large" src="images/profile.png" alt="Profile Picture">
            <div class="facenook-profile-details">
                <h2>Kassiopia <span class="facenook-username">@kassarole</span></h2>
                <p>
                    Former mobile forensics researcher, now a cloud engineer.<br>
                    Traveler, photographer, and vintage tech enthusiast.
                </p>
                <ul class="facenook-profile-links">
                    <li><strong>Twitter:</strong> <a href="https://twitter.com/_kassarole" target="_blank">@_kassarole</a></li>
                    <li><strong>Bluesky:</strong> <a href="https://bsky.app/profile/fauxkassarole.bsky.social" target="_blank">@fauxkassarole.bsky.social</a></li>
                    <li><strong>Tumblr:</strong> <a href="https://fauxkassarole.tumblr.com" target="_blank">fauxkassarole.tumblr.com</a></li>
                    <li><strong>Blog:</strong> <a href="https://blog.kassiopia.dev" target="_blank">blog.kassiopia.dev</a></li>
                </ul>
            </div>
        </div>
        <div class="facenook-profile-section">
            <h3>Projects</h3>
            <ul class="facenook-project-list">
                <li>
                    <a href="https://git.basedzone.xyz/kass/music-organizer" target="_blank"><strong>Music Organizer</strong></a> – Python script for organizing music downloaded with SpotDL.
                </li>
                <li>
                    <a href="https://git.basedzone.xyz/kass/ebook-downloader" target="_blank"><strong>eBook Downloader</strong></a> – Python script for searching/downloading books from libgen (web UI & CLI).
                </li>
                <li>
                    <a href="https://git.basedzone.xyz/kass/MVIMG_Carving" target="_blank"><strong>MVIMG Carving</strong></a> – Extracts video segments from Android Motion Photos.
                </li>
                <li>
                    <strong>Untitled Game Project</strong> – In development with my partner. More info soon!
                </li>
            </ul>
        </div>
        <div class="facenook-profile-section">
            <h3>Recent Blog Posts</h3>
            <ul class="facenook-blog-list">
                <li><a href="https://blog.kassiopia.dev/?p=177" target="_blank">SANS Holiday Hack 2024</a></li>
                <li><a href="https://blog.kassiopia.dev/?p=164" target="_blank">TRS 80 Model 100</a></li>
                <li><a href="https://blog.kassiopia.dev/?p=105" target="_blank">SANS Holiday Hack 2023</a></li>
                <li><a href="https://blog.kassiopia.dev/?p=27" target="_blank">Ersatz TV Setup Guide</a></li>
            </ul>
            <a href="https://blog.kassiopia.dev" target="_blank" class="facenook-blog-link">View all blog posts</a>
        </div>
    </div>
</div>
            <div class="facenook-photos" data-tab-content="photos" style="display:none; padding:16px;">
                <p>Photo gallery coming soon!</p>
            </div>
            <div class="facenook-friends" data-tab-content="friends" style="display:none; padding:16px;">
                <p>Friends list coming soon!</p>
            </div>
        </div>
    `,
    width: '650px',
    height: '500px'
},
    aolchat: {
        title: 'Chat Room',
        content: `
            <div>
                <iframe src='https://iframe.chat/embed?chat=57665667' id='chattable' frameborder='none'></iframe>
            </div>
            <script>
            chattable.initialize({
                theme : "Wannabe XP"
            });
            </script>          
        `,
        width: '350px',
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
    } else if (windowType === 'facenook') {
        setTimeout(() => initializeFacenookTabs(windowEl), 0);
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

function initializeFacenookTabs(windowEl) {
    const navButtons = windowEl.querySelectorAll('.facenook-nav button');
    const tabContents = windowEl.querySelectorAll('[data-tab-content]');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Show/hide tab contents
            const tab = btn.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.getAttribute('data-tab-content') === tab) {
                    content.style.display = '';
                } else {
                    content.style.display = 'none';
                }
            });
        });
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