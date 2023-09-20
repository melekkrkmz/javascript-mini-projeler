const counters = document.querySelectorAll(".caunt")



// console.log(counters)
counters.forEach(counter => {
    const target = +counter.getAttribute("data-target")  //data attribütüne ulaş 
    // console.log(typeof(target))
    let count = counter.innerText

    count = 0;

    const updateCounter = () => {
        // setInterval(() => {

            if (count < target) {
                count++
                counter.innerText = count;
                setTimeout(updateCounter,1)   //setimeout ilede fonksiyonu kullanabilirim.

            } else {
                return
            }


        // }, 10);

    }

    updateCounter()

    })
  


