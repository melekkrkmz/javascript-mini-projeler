const body = document.querySelector("body")

const createCart = document.createElement("div")
createCart.classList.add("container")
body.appendChild(createCart)
let caunt = 0;

createCart.innerHTML = `
<h2>Double click on the image to heart it</h2>
<span>You liked it ${caunt} times</span>
<div class="cart"><div class="img"></div>
<i class="bi bi-balloon-heart-fill"></i></div>
 ` 

   //!---------------------mouse eventlerine çalış ve kalp kısmına animasyon ekle--------------

 const span = createCart.querySelector("span");
 const icon = document.querySelector("i")
 const img = document.querySelector(".img").addEventListener("dblclick", () => {

    caunt++
    span.innerText = `You liked it ${caunt} times`
    console.log(caunt)

    icon.classList.add("active")
    setTimeout(() => {

        icon.classList.remove("active")

    }, 1000)

})

