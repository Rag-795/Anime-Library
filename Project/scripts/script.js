// localStorage.clear();

const usernamedisp = document.getElementById("user");
usernamedisp.innerHTML = JSON.parse(localStorage.getItem("userName")) || " User!";

const loginbtn = document.getElementById("loginBtn");
loginbtn.addEventListener("click", () => {
  window.location.href = "login.html";
})

const logoutbtn = document.getElementById("logoutBtn");
logoutbtn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  window.location.href = "index.html";
})


// Search Input
const input = document.getElementById("search-in");
const searchButton = document.querySelector(".search-btn");

function redirect(){
  localStorage.setItem("searchItem",JSON.stringify(input.value.toLowerCase()));
  window.location.href = "search.html";
}

searchButton.addEventListener("click",()=>{redirect()});
input.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    redirect();
  }
});


// Popular Data
const popular_html = document.querySelector(".popular-html");
let popular_content = "";


for(let i = 0; i < 8; i++){
  popular_content += `<div class="swiper-slide">
                      <div class="popularBox">
                          <img src="${animeData[i].image}" alt="${animeData[i].title}" class="popular-img">
                          <div class="popular-text">
                              <h2 class="popular-title">${animeData[i].title}</h2>
                              <span class="anime-type">${animeData[i].genre}</span>
                              <button class="wish-list-btn" data-anime-id="${animeData[i].id}">
                                  <i class="fa-solid fa-heart-circle-plus"></i>
                              </button>
                          </div>
                      </div>
                    </div>`
}

popular_html.innerHTML = popular_content;

const popular_html_2 = document.querySelector(".popular-2-html");
let popular_content_2 = "";

for(let i = 8; i < 16; i++){
  popular_content_2 += `<div class="swiper-slide">
                      <div class="popularBox">
                          <img src="${animeData[i].image}" alt="${animeData[i].title}" class="popular-img">
                          <div class="popular-text">
                              <h2 class="popular-title">${animeData[i].title}</h2>
                              <span class="anime-type">${animeData[i].genre}</span>
                              <button class="wish-list-btn" data-anime-id="${animeData[i].id}">
                                  <i class="fa-solid fa-heart-circle-plus"></i>
                              </button>
                          </div>
                      </div>
                    </div>`
}

popular_html_2.innerHTML = popular_content_2;

// Movie Data
const movie_html = document.querySelector(".movies-content");
let movies="";
movieData.forEach( (movie) => {
                movies += `<div class="movie-box">
                            <img src="${movie.image}" alt="" class="movie-box-img">
                            <div class="movie-text">
                                <h2 class="popular-title">${movie.title}</h2>
                                <span class="anime-type">${movie.genre}</span>
                                <a href="${movie.link}" target="_blank" class="play-btn">
                                    <i class="fa-solid fa-circle-play"></i>
                                </a>
                            </div>
                          </div>`
}
)

movie_html.innerHTML = movies;


// Slider styles
var swiper = new Swiper(".home-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
});

var swiper = new Swiper(".popular-content", {
  slidesPerView:1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    280:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758:{
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900:{
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
  loop:true,
});

var swiper = new Swiper(".popular-content-2", {
  slidesPerView:1,
  spaceBetween: 10,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    280:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758:{
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900:{
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
  loop:true,
});


// Watch list

const buttons = document.querySelectorAll(".wish-list-btn");
const watchList = JSON.parse(localStorage.getItem("watchList")) || [];
let alreadyExist = false;

buttons.forEach(button => {
  button.addEventListener("click",() =>{
    const animeId = button.dataset.animeId;
    addToList(animeId);
    })
})

function addToList(id) {
  watchList.forEach(value=>{
    if(value === id){
      alert("Already added to the list");
      alreadyExist = true;
    }
  })
  
  if(!alreadyExist){
    watchList.push(id);
    console.log(watchList);
    localStorage.setItem("watchList",JSON.stringify(watchList));
    alert("Added Successfully");
  }
}

