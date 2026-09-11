// ================= SEARCH =================

const searchBox = document.querySelector(".search-box");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Stop if search bar doesn't exist
if (searchBox && searchBtn && searchInput && searchResults) {

const products = [
    { name: "Plug Gauges", page: "product-details.html?product=plug" },
    { name: "Steel Plug Gauge", page: "product-details.html?product=plug" },
    { name: "Carbide Plug Gauge", page: "product-details.html?product=plug" },
    { name: "Taper Plug Gauge", page: "product-details.html?product=plug" },

    { name: "Snap Gauges", page: "product-details.html?product=snap" },
    { name: "Steel Snap Gauge", page: "product-details.html?product=snap" },
    { name: "Carbide Snap Gauge", page: "product-details.html?product=snap" },

    { name: "Ring Gauges", page: "product-details.html?product=ring" },
    { name: "Steel Ring Gauge", page: "product-details.html?product=ring" },
    { name: "Carbide Ring Gauge", page: "product-details.html?product=ring" },

    { name: "Width Gauges", page: "product-details.html?product=width" },
    { name: "Steel Width Gauge", page: "product-details.html?product=width" },
    { name: "Carbide Width Gauge", page: "product-details.html?product=width" },

    { name: "Measuring Pin Set", page: "product-details.html?product=special" },
    { name: "Pin Gauge", page: "product-details.html?product=special" },

    // New Products
    { name: "Width Slip Master", page: "product-details.html?product=widthmaster" },
    { name: "Width (Slip) Master", page: "product-details.html?product=widthmaster" },

    { name: "Special Type Gauges", page: "product-details.html?product=specialgauge" },
    { name: "Special Type Gauge", page: "product-details.html?product=specialgauge" },

    { name: "Taper and Rolling Mandrels", page: "product-details.html?product=mandrel" },
    { name: "Taper & Rolling Mandrel", page: "product-details.html?product=mandrel" },

    { name: "Circlip Distance Groove Check Gauges", page: "product-details.html?product=circlip" },
    { name: "Circlip Groove Check Gauge", page: "product-details.html?product=circlip" },

    { name: "Functional Relation Gauges", page: "product-details.html?product=functional" },
    { name: "Functional / Relation Gauge", page: "product-details.html?product=functional" }
];

    // Open Search
    searchBtn.addEventListener("click", () => {
        searchBox.classList.add("active");
        searchInput.focus();
    });

    // Live Search
    searchInput.addEventListener("input", function () {

        const value = this.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (value === "") {
            searchResults.style.display = "none";
            return;
        }

        const matches = products.filter(product =>
            product.name.toLowerCase().includes(value)
        );

        if (matches.length === 0) {

            searchResults.innerHTML =
                `<div class="search-item">No Product Found</div>`;

        } else {

            matches.forEach(product => {

                searchResults.innerHTML +=
                `<div class="search-item"
                    data-page="${product.page}">
                    ${product.name}
                </div>`;

            });

        }

        searchResults.style.display = "block";

    });

    // Click Suggestion
    searchResults.addEventListener("click", function (e) {

        if (!e.target.classList.contains("search-item")) return;

        const page = e.target.dataset.page;

        if (page) {
            window.location.href = page;
        }

    });

    // Enter Key
    searchInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            const first = searchResults.querySelector(".search-item");

            if (first && first.dataset.page) {
                window.location.href = first.dataset.page;
            }

        }

    });

    // Hide Suggestions
    document.addEventListener("click", function (e) {

        if (!searchBox.contains(e.target)) {
            searchResults.style.display = "none";
        }

    });

}