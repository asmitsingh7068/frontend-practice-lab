
// SELECT ELEMENTS


const productsContainer = document.getElementById("productsContainer");
const loader = document.getElementById("loader");
const error = document.getElementById("error");


// API URL


const API_URL = "https://dummyjson.com/products?limit=500&skip=50";// mtlb 50 products skip krke baki 500 products fetch krne k liye


// FETCH PRODUCTS


async function fetchProducts() {

    try {

        loader.classList.remove("hidden");
        error.classList.add("hidden");

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        displayProducts(data.products);

    } catch (err) {

        console.log(err);

        error.classList.remove("hidden");

    } finally {

        loader.classList.add("hidden");

    }

}

// DISPLAY PRODUCTS


function displayProducts(products) {

    productsContainer.innerHTML = "";

    products.forEach((product) => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img src="${product.thumbnail}" alt="${product.title}">

            <div class="product-info">

                <h3>${product.title}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹ ${product.price}
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <button>
                    Add To Cart
                </button>

            </div>

        `;

        productsContainer.appendChild(card);

    });

}

// START APP


fetchProducts();