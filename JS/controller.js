//Functions


drawMovieCards(model.movies);
function toggleHidden(i) {
  document.getElementsByClassName("bottomCard")[i].classList.toggle("hidden");
}



function resetFilter() {
  drawMovieCards(model.movies);
  updateView();
}

function filterUserSpesifiedMovies(filterValue){
    let userSpesifiedMovies = [];
  for (let i = 0; i < model.movies.length; i++) {
    if (model.movies[i].genre == filterValue ) {
      userSpesifiedMovies.push(model.movies[i]);
    }
  }
  drawMovieCards(userSpesifiedMovies);
  updateView();
}



function filterBestRating() {
  let bestRatedMovies = [];
  for (let i = 0; i < model.movies.length; i++) {
    if (model.movies[i].rating > 870) {
      bestRatedMovies.push(model.movies[i]);
    }
  }
  drawMovieCards(bestRatedMovies);
  updateView();
}



function addMovie() {}



function filterNewMovies() {
  let newestMovies = [];
  for (let i = 0; i < model.movies.length; i++) {
    if (model.movies[i].releaseDate > 2020) {
      newestMovies.push(model.movies[i]);
    }
  }

  drawMovieCards(newestMovies);
  updateView();
}



function drawMovieCards(selectedArray) {
  cardHTML = "";
  for (let i = 0; i < selectedArray.length; i++) {
    cardHTML += /*HTML*/ `
        
      <div onmouseenter="toggleHidden(${i})" onmouseleave="toggleHidden(${i})" class="movieCard">
        <img src=${selectedArray[i].poster} onerror="this.onerror=null; this.src='/Assets/fallbackDefault.jpg'">
        <div class="movieTitle">${selectedArray[i].title}</div>
        <div class="movieInfo">${selectedArray[i].genre} <span>${selectedArray[i].releaseDate} | ${selectedArray[i].rating}</span></div>
        <div class="bottomCard hidden">
            <div class="movieDescription">${selectedArray[i].synopsis}</div>
        </div>
      </div>
        `;
  }
}
