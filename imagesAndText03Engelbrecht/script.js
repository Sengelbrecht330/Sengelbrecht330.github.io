// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/Image06.jpg',
alt: 'shadow',
caption: 'Beauty'
},
{ src: 'images/image01.jpg',
alt: 'second',
caption: 'Anticipation'
},
{ src: 'images/image03.jpg',
alt: 'third',
caption: 'Tranquility'
},
{ src: 'images/image02.jpg',
alt: 'fourth',
caption: 'Concentration'
},
{ src: 'images/image08.jpg',
alt: 'fifth',
caption: 'Where to next?'
},
{ src: 'images/Image10.jpg',
alt: 'sixth',
caption: 'Relaxation'
},
{ src: 'images/image07.jpg',
alt: 'seventh',
caption: 'Bonding'
},
{ src: 'images/image04.jpg',
alt: 'eighth',
caption: 'Comfort'
},
{ src: 'images/image05.jpg',
alt: 'ninth',
caption: 'Exhaustion'
},
{ src: 'images/image09.jpg',
alt: 'tenth',
caption: 'Excitement'
},
];

let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src; // replaces the image
mainImage.alt = slide.alt; // replaces the alt of the image
caption.textContent = slide.caption; // updates caption text
}
