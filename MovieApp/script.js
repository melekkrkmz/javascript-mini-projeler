const containar = document.querySelector(".cart-containar")
const search = document.getElementById("search")

console.log(search)

// istek at
const apiCall = async () => {

    // the movie database sitesi
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
        </div>  `
        //Oluşturulan elemente bir key ve value tanımlarken setAttribute("key", "value"); fonksiyonunu bu şekilde kullanıyoruz.
        // bunu id vermek için kullandık
        movieDiv.setAttribute("id", movie.id)
        containar.appendChild(movieDiv)



    });

   
    
  let movies=document.querySelectorAll(".movie")
  console.log("movie",movies)

  search.addEventListener("input",()=>{

    const searchValue=search.value.toLowerCase()
    
    // bütün movi divlerin üzerinde dön
    movies.forEach(movieDiv => {
        //  divlerin içindeki tittle ulaş ve textini küçült
        const title = movieDiv.querySelector(".batton-containar h3").innerHTML.toLowerCase();
        //   eğer tittleda search kımını içeriyor ise divin displayini block yap yok ise none yap
        if (title.includes(searchValue)) {

            movieDiv.style.display = "block";

        } else {

            movieDiv.style.display = "none";

        }
    })
   

  })  
}
 

apiCall()


