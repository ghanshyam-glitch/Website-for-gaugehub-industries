// Open & Close Search
searchBtn.addEventListener("click", function () {

    if (!searchBox.classList.contains("active")) {
        searchBox.classList.add("active");
        searchInput.focus();
        return;
    }

    performSearch();
});

// Enter key
searchInput.addEventListener("keydown", function(e){

    if(e.key==="Enter"){
        e.preventDefault();
        performSearch();
    }

});

function performSearch(){

    const value = searchInput.value.toLowerCase().trim();

    if(value==="") return;

    let found=false;

    for(let keyword in searchProducts){

        if(value.includes(keyword)){

            window.location.href =
            `product-details.html?product=${searchProducts[keyword]}`;

            found=true;
            break;
        }

    }

    if(!found){

        alert("Product not found.");

    }

};
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
