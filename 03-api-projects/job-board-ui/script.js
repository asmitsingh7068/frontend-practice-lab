const jobsContainer = document.getElementById("jobsContainer");

const searchInput = document.getElementById("searchInput");

const locationFilter = document.getElementById("location");

const jobTypeFilter = document.getElementById("jobType");

let allJobs = [];

async function fetchJobs() {

    const response = await fetch("jobs.json");

    const data = await response.json();

    allJobs = data.jobs;

    displayJobs(allJobs);

}

function displayJobs(jobs) {

    jobsContainer.innerHTML = "";

    if (jobs.length === 0) {

        jobsContainer.innerHTML = "<h2>No Jobs Found</h2>";

        return;

    }

    jobs.forEach(job => {

        const card = `

        <div class="job-card">

            <div class="company">

                <img src="${job.logo}">

                <div>

                    <h3>${job.title}</h3>

                    <p>${job.company}</p>

                </div>

            </div>

            <div class="details">

                <p>📍 ${job.location}</p>

                <p>💼 ${job.type}</p>

                <p>${job.salary}</p>

            </div>

            <button>

                Apply Now

            </button>

        </div>

        `;

        jobsContainer.innerHTML += card;

    });

}

function filterJobs() {

    const search = searchInput.value.toLowerCase();

    const location = locationFilter.value;

    const type = jobTypeFilter.value;

    const filtered = allJobs.filter(job => {

        const matchSearch =
            job.title.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search);

        const matchLocation =
            location === "All Locations" ||
            job.location === location;

        const matchType =
            type === "All Types" ||
            job.type === type;

        return matchSearch &&
               matchLocation &&
               matchType;

    });

    displayJobs(filtered);

}

searchInput.addEventListener("input", filterJobs);

locationFilter.addEventListener("change", filterJobs);

jobTypeFilter.addEventListener("change", filterJobs);

fetchJobs();