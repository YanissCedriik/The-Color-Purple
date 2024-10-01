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
          <a href="#">Action</a>
          <a href="#">Animation</a>
          <a href="#">Adventure</a>
          <a href="#">Comedy</a>
          <a href="#">Crime</a>
          <a href="#">Drama</a>
          <a href="#">Sci-Fi</a>
          <a href="#">Spy</a>
          <a href="#">Thriller</a>
          <a href="#">Romance</a>
          <a href="#">War</a>
      </div>
  </div>
  <button>Home</button>
  <button>Profile</button>
</header>

<input type="text" placeholder="Search Movies..." />

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
