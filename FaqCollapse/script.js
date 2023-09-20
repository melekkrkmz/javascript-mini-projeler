const btn = document.querySelectorAll(".btn")


btn.forEach(btn => {

    btn.addEventListener("click", () => {

        const reply = btn.parentElement.querySelector(".reply");
        const icon=btn.querySelector(".bi")

         reply.classList.toggle("active");
         icon.classList.toggle("active")

    });

})


