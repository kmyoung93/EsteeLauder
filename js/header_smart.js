document.addEventListener("DOMContentLoaded",()=>{
    const btnAllMenu = document.querySelector(".btn_all_menu")
    const bntClosed = document.querySelector(".btn_closed")
    const hiddenGnb = document.querySelector(".hidden_gnb")
    const menuIcon = document.querySelector(".menu_icon")
    let smartDep1 = document.querySelectorAll(".smart_dep1")
    let smartDep2 = document.querySelectorAll(".smart_dep2")

    btnAllMenu.addEventListener("click",()=>{
        hiddenGnb.classList.add("on")
    })

    bntClosed.addEventListener("click",()=>{
        hiddenGnb.classList.remove("on")
    })

    smartDep1.forEach((dep1,d) => {    
        if (dep1){
            dep1.addEventListener("click", () => {
                dep1.classList.toggle("on")
            })
        }
    })

    smartDep2.forEach((dep2) => {
        const link = dep2.querySelector("a")
        
        if (link) {
            link.addEventListener("click", (e) => {
                e.preventDefault()
                // 단순 토글 - 클릭할 때마다 열림/닫힘 반복
                dep2.classList.toggle("on")
            })
        }
    })
})