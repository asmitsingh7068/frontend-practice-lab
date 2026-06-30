// ======================
// Tabs
// ======================

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));

        contents.forEach(content => {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");

    });

});

// ======================
// Accordion
// ======================

const questions = document.querySelectorAll(".question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle("show");

    });

});