const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image's URL: ${url}`);
  });
}

function downloadImages() {
 
  const imagePromises = images.map(image => loadImage(image.url));

  Promise.all(imagePromises)
    .then(loadedImages => {
      
      output.innerHTML = '';
      
      loadedImages.forEach(img => output.appendChild(img));
    })
    .catch(error => {
      
      console.error(error);
    });
}

btn.addEventListener("click", downloadImages);
