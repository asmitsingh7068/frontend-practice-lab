const blogContainer = document.getElementById("blogContainer");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const loader = document.getElementById("loader");

const error = document.getElementById("error");

let allBlogs = [];

// ============================
// Fetch Blogs
// ============================

async function fetchBlogs() {

    loader.classList.remove("hidden");

    error.classList.add("hidden");

    try {

        const response = await fetch("blogs.json");

        if (!response.ok) {

            throw new Error("Unable to fetch blogs.");

        }

        const data = await response.json();

        allBlogs = data.blogs;

        displayBlogs(allBlogs);

    }

    catch (err) {

        error.classList.remove("hidden");

        console.log(err);

    }

    finally {

        loader.classList.add("hidden");

    }

}

// ============================
// Display Blogs
// ============================

function displayBlogs(blogs) {

    blogContainer.innerHTML = "";

    if (blogs.length === 0) {

        blogContainer.innerHTML = `
        
        <h2 style="text-align:center;">
            No Blogs Found
        </h2>
        
        `;

        return;

    }

    blogs.forEach(blog => {

        blogContainer.innerHTML += `

        <div class="blog-card">

            <img
                src="${blog.image}"
                alt="${blog.title}">

            <div class="blog-content">

                <span class="category">

                    ${blog.category}

                </span>

                <h3>

                    ${blog.title}

                </h3>

                <p>

                    ${blog.description}

                </p>

                <small>

                    👤 ${blog.author}

                </small>

                <br><br>

                <small>

                    📅 ${blog.date}

                </small>

                <br><br>

                <small>

                    ⏱ ${blog.readTime}

                </small>

                <br><br>

                <a
                    href="#"
                    class="read-more">

                    Read More →

                </a>

            </div>

        </div>

        `;

    });

}

// ============================
// Search & Filter
// ============================

function filterBlogs() {

    const search = searchInput.value.toLowerCase();

    const category = categoryFilter.value.toLowerCase();

    const filtered = allBlogs.filter(blog => {

        const matchSearch =

            blog.title.toLowerCase().includes(search) ||

            blog.description.toLowerCase().includes(search);

        const matchCategory =

            category === "all" ||

            blog.category.toLowerCase() === category;

        return matchSearch && matchCategory;

    });

    displayBlogs(filtered);

}

// ============================
// Events
// ============================

searchInput.addEventListener("input", filterBlogs);

categoryFilter.addEventListener("change", filterBlogs);

// ============================
// Start
// ============================

fetchBlogs();