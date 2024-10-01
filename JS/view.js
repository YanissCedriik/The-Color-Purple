// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------
updateView();

function updateView() {
  app.innerHTML = /*HTML*/ ` 
    
  <header>
  <img src="Assets/The_Color_Purple_Movie_Logo.svg" />
  <div class="dropdown">
      <button class="dropbtn">Browse</button>
      <div class="dropdown-content">
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Action</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Animation</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Adventure</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Comedy</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Crime</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Drama</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Sci-Fi</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Spy</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Thriller</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">Romance</a>
          <a onclick="filterUserSpecifiedMovies(this.innerHTML)" href="#">War</a>
      </div>
  </div>
  <button>Home</button>
  <button><a href="userProfile.html">Profile</a></button>
</header>

<input onchange="customSearch(this.value)" type="text" placeholder="Search Movies..." />

<div class="featuredContent">

  <img src="Assets/civilwar-header2.jpg">

</div>


      <div class="quickbar">
        <button onclick="filterBestRating()">Best Rated</button>
        <button onclick="filterNewMovies()">New Movies</button>
        <button onclick="resetFilter()">All Movies</button>
        <button onclick="filterFavoriteMovies()">My Favorites</button>
        <button onclick="addMovie()">Add Movies +</button>
      </div>
    
          <div class="mainContainer">${cardHTML}</div>


  `;
}
