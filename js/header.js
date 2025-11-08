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

    const headerSearchBtn = document.querySelector(".serach-btn");

    headerSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.querySelector(".serch-modal");

    if (!modal) {
        // 모달이 아직 삽입되지 않았거나 fetch 실패 → 검색 페이지로 이동
        window.location.href = "/product-search/product-search.html";
        return;
    }

    if (window.innerWidth > 1460) {
        modal.hidden = false;
        document.body.style.overflow = "hidden";
    } else {
        window.location.href = "/product-search/product-search.html";
    }
    });


  
})