// Custom JavaScript for Dynamic Image Loading and Rotation

// Array of online image URLs for each service
const serviceImages = {
    service1: [
        "https://via.placeholder.com/300x200?text=Haircuts+1",
        "https://via.placeholder.com/300x200?text=Haircuts+2",
        "https://via.placeholder.com/300x200?text=Haircuts+3"
    ],
    service2: [
        "https://via.placeholder.com/300x200?text=Beard+Trims+1",
        "https://via.placeholder.com/300x200?text=Beard+Trims+2",
        "https://via.placeholder.com/300x200?text=Beard+Trims+3"
    ],
    service3: [
        "https://via.placeholder.com/300x200?text=Beauty+Services+1",
        "https://via.placeholder.com/300x200?text=Beauty+Services+2",
        "https://via.placeholder.com/300x200?text=Beauty+Services+3"
    ]
};

// Function to rotate images
function rotateImages() {
    Object.keys(serviceImages).forEach((serviceId) => {
        const imgElement = document.getElementById(serviceId);
        const images = serviceImages[serviceId];
        const currentSrc = imgElement.getAttribute("src");
        const currentIndex = images.indexOf(currentSrc);

        // Get next image in the array, or loop back to the first
        const nextIndex = (currentIndex + 1) % images.length;
        imgElement.setAttribute("src", images[nextIndex]);
    });
}

// Initialize images
Object.keys(serviceImages).forEach((serviceId) => {
    const imgElement = document.getElementById(serviceId);
    imgElement.setAttribute("src", serviceImages[serviceId][0]);
});

// Rotate images every 5 seconds
setInterval(rotateImages, 5000);