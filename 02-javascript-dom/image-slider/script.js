const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
const totalSlides = slide.length;

// Create dots
for(let i=0;i<totalSlides;i++){

    const dot=document.createElement("span");

    dot.classList.add("dot");

    if(i===0){
        dot.classList.add("active");
    }

    dot.addEventListener("click",()=>{

        currentIndex=i;

        updateSlider();

    });

    dotsContainer.appendChild(dot);

}

const dots=document.querySelectorAll(".dot");

function updateSlider(){

    slides.style.transform=`translateX(-${currentIndex*100}%)`;

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[currentIndex].classList.add("active");

}

next.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=totalSlides){

        currentIndex=0;

    }

    updateSlider();

});

prev.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=totalSlides-1;

    }

    updateSlider();

});

setInterval(()=>{

    currentIndex++;

    if(currentIndex>=totalSlides){

        currentIndex=0;

    }

    updateSlider();

},3000);