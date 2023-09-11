
const poster=document.querySelectorAll(".poster")

poster.forEach(posters=>{
    console.log(posters)
    posters.addEventListener("click",()=>{
       closePoster()
        posters.classList.add("active")
    })
})


 //  active classını kaldır  
    closePoster=()=>{
        poster.forEach(posters=>{
  
            posters.classList.remove("active")

        })
       
    }


    // önce active class ı kaldırıyoruz sonrada tekrar active classı başka bir elemente veriyoruz

