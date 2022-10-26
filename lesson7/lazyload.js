const imagesToLoad = document.querySelectorAll("img[data-src]");

// Change src attribute on image load
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};


//Check if browser supports observer
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((image) => {
        observer.observe(image)
    })
} else {
    imagesToLoad.forEach((image) => {
        loadImages(image);
    });
}