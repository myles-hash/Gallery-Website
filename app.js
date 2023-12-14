const thumbnails = document.querySelectorAll("img");
const displayImage = document.getElementById('displayImage');
const arrow = document.getElementById('arrow');
const descrip = document.getElementById('descrip');
const btn = document.getElementById('button');
const left = document.getElementById('left');
const div = document.querySelector('.displayImageDiv')
const h3 = document.querySelector('h3');

thumbnails.forEach((thumb) => {
    thumb.addEventListener('click',() =>{
        displayImage.src = thumb.src;
        displayImage.alt = thumb.alt;
        descrip.textContent = thumb.alt;
    })
});
btn.addEventListener('click', function () {
    if (left.style.display === 'none' || left.style.display === '') {
        left.style.display = 'flex';
        btn.textContent = 'Hide';
        h3.style.maxWidth = '20vw'
    } else {
        left.style.display = 'none';
        btn.textContent = 'Reveal';
        h3.style.maxWidth = '35vw'
    }
});




   