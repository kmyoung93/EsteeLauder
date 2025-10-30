document.addEventListener("DOMContentLoaded",()=>{

    let header = document.querySelector("header")

    //마우스 휠을 올리거나 내릴 때 사용하는 소스코드 
    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop //브라우저의 호환성을 생각하여(파이어폭스, 오페라 등은 window.pageUOffset 프로퍼티가 없음) 스크롤바가 내려온 길이를 계산함
        if(scrollTop < lastScrollTop){
            //마우스 휠을 위로 굴렸을 때
            console.log("마우스 휠을 위로 올림")
            header.classList.remove("on")
        }else{
            //마우스 휠을 아래로 굴렸을 때
            console.log("마우스 휠을 아래로 내림")
            header.classList.add("on")
        }
        lastScrollTop = scrollTop
    })

    

})