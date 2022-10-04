function displaySongs(songArr){

    const songList = document.getElementById("song-list");

    songList.innerHTML = ""
    songArr.forEach((song)=>{
        
        const newSong = document.createElement("li");

        newSong.innerHTML =
        `
        <li class="song-card flex direction-column">
          <figure class="song-image">
            <img src=${song.img} alt="${song.title}">
          </figure>

          <section class="about-song flex direction-column justify-between">
            <div class="flex band-year">
              <span>${song.band}</span>
              <span>${song.year}</span>
            </div>
            
            <h3 class="section-title">${song.title}</h3>

            <div class="value-buy space flex justify-between align-center">
              <h4>R$${song.price.toFixed(2)}</h4>
              <button id="buySong" class="buySong">Comprar</button>
            </div>
            
          </section>
        </li>
        `

        songList.append(newSong);
    })
}

displaySongs(products);