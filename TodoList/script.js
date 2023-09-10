const btn = document.querySelectorAll("button")
const input = document.querySelector(".form-control")
const taskContainar = document.querySelector(".taskcontainar")

let span = document.querySelector("span")


// görev ekle
const createTask = document.querySelector(".btn-warning").addEventListener("click", () => {

  // eğer input içeriği boş ise ekleme yapma
  if(input.value===""){
    return
  }

  let task = document.createElement("div")
  task.classList.add("task")
  task.innerHTML = `
         <span>${input.value}</span>
         <div class="btn-container">
             <button class="btn btn-danger"><i class="bi bi-trash2"></i></button>
             <button class="btn btn-success"><i class="bi bi-pencil"></i></button>
             <button class="btn btn-info"><i class="bi bi-check-square"></i></i></button>
          </div>`

  taskContainar.appendChild(task)


  input.value = ""

  //  silme işlemi
  const deleteBtn = task.querySelector(".btn-danger")
  deleteBtn.addEventListener("click", function () {

     taskContainar.removeChild(task)

  })

  // üstünü çiz
  task.querySelector(".btn-info").addEventListener("click",()=>{
   
    task.children[0].classList.toggle("active")
  
  })

  // düzelt
  task.querySelector(".btn-success").addEventListener("click",()=>{
    
    input.value= task.children[0].textContent

    if(input.value=== task.children[0].textContent){
      createTask()
    }
    
  })

 



})





