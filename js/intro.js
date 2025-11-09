document.addEventListener("DOMContentLoaded",()=>{


    const intro = document.querySelector(".intro")
    intro.addEventListener("click",()=>{
        intro.classList.add("on")
    })
    setTimeout(()=>{
        intro.classList.add("on")
    },1700)
})