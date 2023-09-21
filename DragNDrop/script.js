const box=document.querySelectorAll(".box")
const fill=document.querySelector(".fill")

//!bu iki eventi taşınacak olan kısım için kullandık
// bu event öğetutulduğunda çalışıyor
fill.addEventListener("dragstart",dragStart)
// bu event öğeyi bıraktığımızda çalışıyor
fill.addEventListener("dragend",dragEnd)

// öğeyi tut
function dragStart(){

    // claslist classa ekleme yaptı
    this.classList.add("hold")
    setTimeout(()=>{
        // classname direkt class ismini değiştirdi
       this.className='invisible'
           
    },1)
   


}

// öğeyi bırak
function dragEnd(){

    // console.log("end")
    // this.classList.add("fill")
    this.className="fill"

}

//!diğer eventleri kutular üzerindeki hareketler için kullandık
box.forEach(box=>{
   
   box.addEventListener("dragover",dragOver)
   box.addEventListener("dragleave",dragLeave)
   box.addEventListener("dragenter",dragEnter)
   box.addEventListener("drop",drop)
})

// bu da hedef üzerinde ne kadar süre kaldığını söylüyor
function dragOver(e){
//console.log("over")
e.preventDefault()

}

// bu hedeften ayrıldığında çalışıyor
function dragLeave(){
  // console.log("leave")
  this.classList.remove("hover")
    
}
// bu öğe hedef üzerine geldiğinde çalışıyor
function dragEnter(e){
  //  console.log("enter")
 //hedefe geldiğnde var sayılan özellikleri kaldır   
  e.preventDefault()
  this.classList.add("hover")
    
}

// bu öğe hedefe bırakıldığında çalışıyor
function drop(){
    console.log("drop")
    this.className="box"
    this.append(fill)
    
}