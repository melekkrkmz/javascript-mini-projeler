const containar = document.querySelector(".cart-containar")

// istek at
const apiCall = async () => {

    const request = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1")
    const data = await request.json()
    console.log(data)


    data.results.forEach(movie => {

        // bir film containarı oluştur geri kalan elementleri bunun içine yerleştir.
        const movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")

        movieDiv.innerHTML = `
         
        <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}">
        <div class="batton-containar">
            <h3>${movie.title}</h3>
            <span class="star">${movie.vote_average}</span>
        </div>
        <div class="explanation">
            <h2 style="margin-bottom: 5px;">${movie.title}</h2><hr>
            ${movie.overview}
        </div>
    
   
    `
        //Oluşturulan elemente bir key ve value tanımlarken setAttribute("key", "value"); fonksiyonunu bu şekilde kullanıyoruz.
        // bunu id vermek için kullandık
        movieDiv.setAttribute("id", movie.id)
        containar.appendChild(movieDiv)

    });

}


apiCall()