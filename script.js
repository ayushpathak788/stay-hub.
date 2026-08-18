/* =========================================
   STAYHUB - MAIN JAVASCRIPT
========================================= */


const properties = [

    {
        name: "Premium Student PG",
        type: "PG",
        location: "Knowledge Park, Greater Noida",
        price: 7500,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Urban Co-Living Hostel",
        type: "Hostel",
        location: "Pari Chowk, Greater Noida",
        price: 4500,
        rating: 4.7,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Modern 2BHK Apartment",
        type: "Flat",
        location: "Tech Zone, Greater Noida",
        price: 18000,
        rating: 4.9,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Luxury Private Room",
        type: "Room",
        location: "Noida Extension",
        price: 9000,
        rating: 4.6,
        reviews: 61,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Premium City Hotel",
        type: "Hotel",
        location: "Sector 18, Noida",
        price: 3200,
        rating: 4.5,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Peaceful Family Homestay",
        type: "Homestay",
        location: "Noida",
        price: 2500,
        rating: 4.8,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=85"
    }

];



/* =========================================
   DISPLAY PROPERTIES
========================================= */

function displayProperties(list) {

    const grid =
        document.getElementById("propertyGrid");

    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
            ">

                <i
                    class="fa-solid fa-house-circle-xmark"
                    style="
                        font-size:50px;
                        color:#94a3b8;
                    "
                ></i>

                <h3 style="margin-top:15px;">
                    No properties found
                </h3>

                <p style="color:#64748b;">
                    Try changing your search filters.
                </p>

            </div>

        `;

        return;
    }


    list.forEach((property, index) => {

        const card =
            document.createElement("article");

        card.className = "property-card";


        card.innerHTML = `

            <div class="property-image">

                <img
                    src="${property.image}"
                    alt="${property.name}"
                    loading="lazy"
                >

                <span class="property-badge">

                    <i class="fa-solid fa-circle-check"></i>

                    Verified

                </span>


                <button
                    class="favorite-btn"
                    onclick="toggleFavorite(this)"
                    aria-label="Add to wishlist"
                >

                    <i class="fa-regular fa-heart"></i>

                </button>

            </div>


            <div class="property-info">

                <span class="property-type">
                    ${property.type}
                </span>

                <h3>
                    ${property.name}
                </h3>

                <div class="location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${property.location}

                </div>


                <div class="property-bottom">

                    <div class="price">

                        ₹${property.price.toLocaleString("en-IN")}

                        <small>
                            / month
                        </small>

                    </div>


                    <div class="rating">

                        ★ ${property.rating}

                        <span style="
                            color:#94a3b8;
                            font-size:10px;
                        ">
                            (${property.reviews})
                        </span>

                    </div>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });

}



/* =========================================
   SEARCH
========================================= */

function searchProperties() {

    const location =
        document
            .getElementById("locationInput")
            .value
            .toLowerCase()
            .trim();


    const type =
        document
            .getElementById("typeInput")
            .value;


    const budget =
        document
            .getElementById("budgetInput")
            .value;


    const results =
        properties.filter(property => {

            const locationMatch =
                !location ||
                property.location
                    .toLowerCase()
                    .includes(location);


            const typeMatch =
                type === "all" ||
                property.type === type;


            const budgetMatch =
                budget === "all" ||
                property.price <= Number(budget);


            return (
                locationMatch &&
                typeMatch &&
                budgetMatch
            );

        });


    displayProperties(results);


    document
        .getElementById("properties")
        .scrollIntoView({
            behavior: "smooth"
        });


    showToast(
        `${results.length} properties found`
    );

}



/* =========================================
   CATEGORY
========================================= */

function selectCategory(type) {

    document
        .getElementById("typeInput")
        .value = type;


    searchProperties();

}



/* =========================================
   SHOW ALL
========================================= */

function showAllProperties() {

    document
        .getElementById("locationInput")
        .value = "";


    document
        .getElementById("typeInput")
        .value = "all";


    document
        .getElementById("budgetInput")
        .value = "all";


    displayProperties(properties);

}



/* =========================================
   FAVORITE
========================================= */

function toggleFavorite(button) {

    button.classList.toggle("liked");


    const icon =
        button.querySelector("i");


    if (button.classList.contains("liked")) {

        icon.className =
            "fa-solid fa-heart";

        showToast("Added to wishlist");

    } else {

        icon.className =
            "fa-regular fa-heart";

        showToast("Removed from wishlist");

    }

}



/* =========================================
   FAQ
========================================= */

function toggleFAQ(button) {

    const item =
        button.parentElement;


    item.classList.toggle("open");

}



/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("open");

}



/* =========================================
   LOGIN MODAL
========================================= */

function openModal() {

    document
        .getElementById("loginModal")
        .classList.add("show");

}


function closeModal() {

    document
        .getElementById("loginModal")
        .classList.remove("show");

}


function loginDemo() {

    closeModal();

    showToast(
        "Demo login successful!"
    );

}



/* =========================================
   CONTACT FORM
========================================= */

function sendMessage(event) {

    event.preventDefault();

    event.target.reset();

    showToast(
        "Your message has been sent!"
    );

}



/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    const text =
        document.getElementById("toastMessage");


    text.textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}



/* =========================================
   DARK MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    () => {

        document.body
            .classList.toggle("dark");


        const icon =
            themeBtn.querySelector("i");


        if (
            document.body
                .classList.contains("dark")
        ) {

            icon.className =
                "fa-solid fa-sun";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            icon.className =
                "fa-solid fa-moon";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);



/* =========================================
   LOAD THEME
========================================= */

if (
    localStorage.getItem("theme")
    === "dark"
) {

    document.body
        .classList.add("dark");

    themeBtn
        .querySelector("i")
        .className =
        "fa-solid fa-sun";

}



/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;


                const counter =
                    entry.target;


                const target =
                    Number(
                        counter.dataset.count
                    );


                let current = 0;


                const increment =
                    target / 80;


                const updateCounter =
                    () => {

                        current += increment;


                        if (
                            current < target
                        ) {

                            counter.textContent =
                                Math.ceil(current)
                                .toLocaleString("en-IN");

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target.toLocaleString(
                                    "en-IN"
                                );

                        }

                    };


                updateCounter();


                observer.unobserve(counter);

            });

        },
        {
            threshold: .5
        }
    );


counters.forEach(counter => {

    observer.observe(counter);

});



/* =========================================
   CLOSE MODAL ON BACKGROUND CLICK
========================================= */

document
    .getElementById("loginModal")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id
                === "loginModal"
            ) {

                closeModal();

            }

        }
    );



/* =========================================
   INITIAL LOAD
========================================= */

displayProperties(properties);