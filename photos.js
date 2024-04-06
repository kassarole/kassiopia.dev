let currentIndex = 0;
        const images = document.querySelectorAll('.table-image');
        const totalImages = images.length;
        console.log(document.querySelectorAll('.table-image'))

        // Open the lightbox
        function openLightbox(event) {
            if (event.target.tagName === 'IMG') {
                console.log(event.target)
                console.log(Array.from(images).indexOf(event.target))
                const clickedIndex = Array.from(images).indexOf(event.target);
                currentIndex = clickedIndex;
                updateLightboxImage();
                document.getElementById('lightbox').style.display = 'flex';
            }
        }

        // Close the lightbox
        function closeLightbox() {
            document.getElementById('lightbox').style.display = 'none';
        }

        // Change the lightbox image based on direction (1 for next, -1 for prev)
        function changeImage(direction) {
            currentIndex += direction;
            if (currentIndex >= totalImages) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            }
            updateLightboxImage();
        }

        // Update the lightbox image and thumbnails
        function updateLightboxImage() {
            const lightboxImg = document.getElementById('lightbox-img');
            const thumbnailContainer = document.getElementById('thumbnail-container');

            // Update the main lightbox image
            lightboxImg.src = images[currentIndex].src;

        };
