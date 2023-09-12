const ring = document.querySelectorAll(".ring")
const nextBtn = document.querySelector(".next-btn")
const backBtn = document.querySelector(".back-btn")
const indikatör = document.querySelector(".indikadör")


let count = 0;

nextBtn.addEventListener("click", () => {

    if (count < ring.length - 1) {

        count++
        ring[count].classList.add("active");
        backBtn.disabled = false;

    }

    if(count===ring.length-1){
    
        nextBtn.disabled = true;
    }
   
  
})



backBtn.addEventListener("click", () => {

    if (count <ring.length) {

      
        ring[count].classList.remove("active");
        count--
        nextBtn.disabled = false;
        
    }
   

})






