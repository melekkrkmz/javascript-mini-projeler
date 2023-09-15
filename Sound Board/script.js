// const songs=document.querySelectorAll(".song")     //src ye belki ulaşabilirim diye yazmıştım
const btnContainar=document.querySelector(".btn-containar")

// buton içerikleri
const  songNames=["Alkış","cheerful","dance","epic","fun","short"]

// let currentSong=null;

songNames.forEach( songNames=>{
  
    let btn=document.createElement("button")
    btn.classList.add("btn","btn-info")

    btn.innerHTML= songNames.toUpperCase()

   
    btn.onclick=()=>{
        //! tıklanan düğme ile aynı ada sahip olan bir ses öğesini seçer. 
        const song = document.getElementById(songNames);
        if (song) {
            // eğer çalan şarkı durdurup başka bir şarkıya geçmek istiyorsak 
            // if (currentSong !== song) {
            //     currentSong.pause();
            //     currentSong.currentTime = 0;
            //   }
            if (song.paused) {
                song.play();
            } else {
                song.pause();
                song.currentTime = 0;
            }

        }
      
    }

    btnContainar.appendChild(btn)
})
