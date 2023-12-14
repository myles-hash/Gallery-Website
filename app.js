const thumbnails = document.querySelectorAll("img");
const displayImage = document.getElementById('displayImage');

thumbnails.forEach((thumb) => {
    thumb.addEventListener('mouseover',() =>{
        displayImage.src = thumb.src;
        displayImage.alt = thumb.src;
    })
})
