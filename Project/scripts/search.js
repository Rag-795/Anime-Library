// UserName
const username = document.getElementById("user");
username.innerHTML = JSON.parse(localStorage.getItem("userName")) || " User!";

// Getting search value from local storage
const searchValue = JSON.parse(localStorage.getItem("searchItem"));
const message = document.getElementById("nothing");

// Main Container
const mainContainer = document.getElementById("search-list");
const searchHTML = document.querySelector(".watch-list-container");

// Generating content
let searchContent = "";
animeData.forEach(anime => {
    searchContent += `<div class="watch-list-box">
                        <img src="${anime.image}" alt="" class="watch-list-img">
                        <div class="watch-content">
                            <h2 class="title">${anime.title}</h2>
                            <span class="genre">${anime.genre}</span>
                            <p class="description">${anime.description}</p>
                            <a href="${anime.link}" target="_blank" class="watch-btn">
                                Watch Now        
                                <i class="fa-solid fa-circle-play"></i>
                            </a>
                        </div>
                    </div>`;
})
searchHTML.innerHTML = searchContent;


const content = document.querySelectorAll(".watch-list-box");

// checking if it is found
let isfound;
animeData.forEach(anime => {
    isfound = anime.title.toLowerCase().includes(searchValue);
})

if(!isfound){
    message.classList.remove("hide");
    mainContainer.classList.add("hide");
}

if (searchValue === "" || searchValue === " " ) {
    message.classList.remove("hide");
    mainContainer.classList.add("hide");
}
else{
    mainContainer.classList.remove("hide");
    animeData.forEach(anime => {
        const isVisible = anime.title.toLowerCase().includes(searchValue);
        content[(anime.id) - 1].classList.toggle("hide", !isVisible)
        if(isVisible){
            message.classList.add("hide");
        }
    })
}