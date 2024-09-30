const btnPrimary = document.querySelectorAll('.főgombok');
const elements = document.querySelectorAll('.container *');

const iksz = document.querySelector("#iksz")

const keret = document.querySelector(".minvisible")
const szakasz = document.querySelector("szakasz")
const body = document.querySelector("body")







btnPrimary.forEach(button => {
    button.addEventListener("click", () => {
        
        body.style.backgroundImage = "None"

        keret.style.display = "block"
        

        szakasz.style.opacity = '0.9'
        szakasz.style.filter = 'blur(5px)';

        body.classList.add('no-scroll');
      
       
    })
})

// eredeti állapot visszaállítása
iksz.addEventListener("click", () =>{
    body.style.backgroundImage = 'url("./img/background.jpg")'
    keret.style.display = "None"
    szakasz.style.opacity = '1'
    szakasz.style.filter = "None"
    console.log("megy")
    body.classList.remove('no-scroll');

})




