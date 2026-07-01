// =====================================
// Card Data
// =====================================

const cards = [

    {
        type: "Product",
        image: "https://picsum.photos/300/200?random=1",
        title: "Wireless Headphones",
        description: "High quality wireless headphones with crystal clear sound.",
        info: "₹2,999",
        button: "Buy Now"
    },

    {
        type: "Profile",
        image: "https://picsum.photos/300/200?random=2",
        title: "John Smith",
        description: "Frontend Developer passionate about modern web technologies.",
        info: "5+ Years Experience",
        button: "View Profile"
    },

    {
        type: "Course",
        image: "https://picsum.photos/300/200?random=3",
        title: "JavaScript Mastery",
        description: "Learn JavaScript from beginner to advanced with projects.",
        info: "Free Course",
        button: "Start Learning"
    },

    {
        type: "Blog",
        image: "https://picsum.photos/300/200?random=4",
        title: "CSS Grid Layout",
        description: "Master CSS Grid by building responsive layouts from scratch.",
        info: "5 min Read",
        button: "Read More"
    },

    {
        type: "Team",
        image: "https://picsum.photos/300/200?random=5",
        title: "Emma Watson",
        description: "UI/UX Designer focused on clean and accessible interfaces.",
        info: "UI Designer",
        button: "Contact"
    },

    {
        type: "Pricing",
        image: "https://picsum.photos/300/200?random=6",
        title: "Premium Plan",
        description: "Unlimited access to all premium features and resources.",
        info: "₹499 / Month",
        button: "Subscribe"
    }

];


// =====================================
// Card Container
// =====================================

const cardContainer = document.querySelector(".card-container");


// =====================================
// Render Cards
// =====================================

function renderCards() {

    cardContainer.innerHTML = "";

    cards.forEach((card) => {

        const cardElement = document.createElement("div");

        cardElement.className = "card";

        cardElement.innerHTML = `

            <img src="${card.image}" alt="${card.title}">

            <div class="card-content">

                <span class="badge">
                    ${card.type}
                </span>

                <h2>${card.title}</h2>

                <p>${card.description}</p>

                <h3>${card.info}</h3>

                <button>
                    ${card.button}
                </button>

            </div>

        `;

        cardContainer.appendChild(cardElement);

    });

}


// =====================================
// Button Click Events
// =====================================

cardContainer.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {

        alert(event.target.innerText + " clicked!");

    }

});


// =====================================
// Initial Load
// =====================================

renderCards();