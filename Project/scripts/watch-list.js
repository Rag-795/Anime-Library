// UserName
const username = document.getElementById("user");
username.innerHTML = JSON.parse(localStorage.getItem("userName")) || " User!";

const watchList = JSON.parse(localStorage.getItem("watchList"));
const message = document.getElementById("nothing");
const watchListHTML = document.querySelector(".watch-list-container");

if(watchList.length == 0){
    message.classList.remove("hide");
}

if(watchList){
    let watchListContent = "";
    watchList.forEach(animeNum => {
        watchListContent += `<div class="watch-list-box watch-${animeNum}">
                            <img src="${animeData[(animeNum)-1].image}" alt="" class="watch-list-img">
                            <div class="watch-content">
                                <h2 class="title">${animeData[(animeNum)-1].title}</h2>
                                <span class="genre">${animeData[(animeNum)-1].genre}</span>
                                <p class="description">${animeData[(animeNum)-1].description}</p>
                                <i class="fa-regular fa-circle-xmark close-btn" id="close-btn" data-watch-id="${animeNum}"></i>
                                <a href="${animeData[(animeNum)-1].link}" target="_blank" class="watch-btn">
                                    Watch Now        
                                    <i class="fa-solid fa-circle-play"></i>
                                </a>
                            </div>
                        </div>`
    })
    watchListHTML.innerHTML=watchListContent;
}

const closeButtons = document.querySelectorAll(".close-btn");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const animeId = button.dataset.watchId;
        deleteFromList(animeId);
        button.parentElement.parentElement.remove();
    })
})

function deleteFromList(id){
    for(let i = 0;i < watchList.length;i++){
        if (watchList[i] === id) {
            watchList.splice(i, 1);
        }
    }
    localStorage.setItem("watchList",JSON.stringify(watchList));
}
