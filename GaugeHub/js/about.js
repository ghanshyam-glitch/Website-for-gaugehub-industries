function showGallery(type){


    let selectedGallery = document.getElementById(type);


    // If already open, close it
    if(selectedGallery.classList.contains("active")){

        selectedGallery.classList.remove("active");

        return;

    }



    // Close all galleries first

    let galleries = document.querySelectorAll(".gallery-images");


    galleries.forEach(function(gallery){

        gallery.classList.remove("active");

    });



    // Open selected gallery

    selectedGallery.classList.add("active");


}
let scale = 1;


function openImage(src){

    let lightbox = document.getElementById("lightbox");

    let image = document.getElementById("lightbox-img");


    image.src = src;


    scale = 1;

    image.style.transform = "scale(1)";


    lightbox.classList.add("active");

}



function closeImage(){

    document
    .getElementById("lightbox")
    .classList.remove("active");

}



function zoomIn(){

    scale += 0.2;


    document
    .getElementById("lightbox-img")
    .style.transform = `scale(${scale})`;

}



function zoomOut(){

    if(scale > 0.5){

        scale -= 0.2;

    }


    document
    .getElementById("lightbox-img")
    .style.transform = `scale(${scale})`;

}
// 

        //star//
        /* ===========================
   STAR RATING
=========================== */

const stars = document.querySelectorAll(".star-rating i");

let selectedRating = 0;

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        selectedRating = index + 1;

        stars.forEach((s, i) => {

            if(i < selectedRating){
                s.classList.add("active");
            }else{
                s.classList.remove("active");
            }

        });

    });

});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
