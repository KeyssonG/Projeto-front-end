let currentImageIndex = 0;
        const images = document.querySelectorAll('#servicos img');

        function showImage(index) {
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = 'none'; 
            }
            if (index >= 0 && index < images.length) {
                images[index].style.display = 'block'; 
                images[index].classList.add('center-image')
                currentImageIndex = index;
            }
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }

        window.onload = function () {
            showImage(currentImageIndex);
            setInterval(nextImage, 3000); 
        };