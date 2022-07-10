const images = ["1.jpg", "2.jpg", "3.jpg"]
const choosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${choosenImage})`;

