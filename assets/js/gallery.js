/* Gallery Controller Variables */
let imageIndex = 0; // Current image.
let displayImg = document.querySelector('.gallery__visor'); // Global Visor image displayer.
let galleryImg = document.querySelectorAll('.gallery__item img'); // Select the thumbnail gallery image.

// Arrow controller
let arrowController = (e) => {
    let direction = e.target.dataset.direction;

    /* Active experiment */
    galleryImg[imageIndex].classList.toggle('active');
    /**/
    /* Display Transition Experiment */
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeIn');
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeInPersist');
    /**/

    if (direction == "left") {
        if (imageIndex > 0) {
            imageIndex--;
        } else {
            imageIndex = galleryImg.length - 1;
        }
    } else {
        if (imageIndex < galleryImg.length - 1) {
            imageIndex++;
        } else {
            imageIndex = 0;
        }
    }

    //let visor = document.querySelector('.visor');
    let newImg = galleryImg[imageIndex].src;
    displayImg.querySelector('.visor--img').src = newImg;
    /* Active experiment */
    galleryImg[imageIndex].classList.toggle('active');
    /**/
}

/* Change the image to display */
let changeVisorImg = e => {
    let newImg = e.target.src;
    /* Active image */
    galleryImg[imageIndex].classList.toggle('active');
    e.target.classList.toggle('active');
    /* */

    /* Display Transition Experiment */
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeIn');
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeInPersist');
    /**/

    let thisImageIndex = e.target.dataset.index; //Select the index data of the current image. 
    imageIndex = thisImageIndex; //Change the global value of the imageIndex.

    displayImg.querySelector('.visor--img').src = newImg; //Replace the image src for the new one.
}

/* Start Full View Gallery */
let fullView = e => {
    displayImg = document.querySelector('.full__container'); // Change to the full view visor displayer.
    let newImg = e.target.src;
    /* */
    let fullViewImage = displayImg.querySelector('.visor--img'); //Select the index data of the current image.
    fullViewImage.src = newImg; //Change the global value of the imageIndex.

    document.querySelector('.full__view').style.display = 'grid';
}

/* Close Full View Gallery */
let closeFullView = e => {
    let imgDisplayer = displayImg.querySelector('.visor--img').src; //Locate the last value of the image full view displayer.
    displayImg = document.querySelector('.gallery__visor'); //Restore the principal visor image displayer.
    displayImg.querySelector('.visor--img').src = imgDisplayer; // Asign the last image full view displayer value.
    document.querySelector('.full__view').style.display = 'none'; //Delete de full view element.
}



/* Change image onClick */
for (let i = galleryImg.length - 1; i >= 0; i--) {
    galleryImg[i].addEventListener('click', changeVisorImg);
}
/* */

/* Call Arrow controller function */
document.querySelectorAll('.arrow').forEach(e => {
    e.addEventListener('click', arrowController);
});

/* Call Full View Gallery Controller */
document.querySelector('.gallery__visor .visor--img').addEventListener('click', fullView);
document.querySelector('.close').addEventListener('click', closeFullView); //Call close full view function. 