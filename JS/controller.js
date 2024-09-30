//Functions
drawMovieCards()
function toggleHidden(i){
    document.getElementsByClassName('bottomCard')[i].classList.toggle('hidden');
            
}


function filterBestRating(){
  return
}

function addMovie(){

}


function drawMovieCards(){
  cardHTML = "";
    for (let i = 0; i < model.movies.length; i++) {  
      cardHTML += /*HTML*/ `
        
      <div onmouseenter="toggleHidden(${i})" onmouseleave="toggleHidden(${i})" class="movieCard">
        <img src=${model.movies[i].poster} onerror="this.onerror=null; this.src='/Assets/fallbackDefault.jpg'">
        <div class="movieTitle">${model.movies[i].title}</div>
        <div class="movieInfo">${model.movies[i].genre} <span>${model.movies[i].releaseDate} | ${model.movies[i].rating}</span></div>
        <div class="bottomCard hidden">
            <div class="movieDescription">${model.movies[i].synopsis}</div>
        </div>
      </div>
        `
      };
}
