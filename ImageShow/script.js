const imgBox = document.querySelectorAll(".box img");
const showBoxImg = document.querySelector(".show-box img");

imgBox.forEach(box => {

  box.addEventListener("click", function () {

    showBoxImg.src = this.src;

  });
  
});
