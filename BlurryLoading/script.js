let loader=document.querySelector(".loader")
const bacraund=document.querySelector(".bacraund")

console.log(bacraund.style)
window.onload=()=>{


let caunt=0;
let blur=40;

setInterval(()=>{

caunt++
blur--

if(caunt>100){
    return
}

loader.innerHTML=`${caunt}%`
if(caunt===100){
    loader.style.display="none"
}
// console.log(caunt)

if(blur===0){
    bacraund.style.filter=`blur(${blur}px)`
}


},30)

  
}


