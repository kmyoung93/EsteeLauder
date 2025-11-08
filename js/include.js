    fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(".header_wrap").innerHTML += data
        // 성공 시 이벤트 추가
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
    })
    .catch(error => console.log("에러 : ",error))

    

    fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer_wrap").innerHTML += data
    })
    .catch(error => console.log("에러 : ",error))

    // 2️⃣ 모달 fetch & 초기화
    fetch("/serch-modal.html")
    .then(res => res.text())
  .then(html => {
    const modalContainer = document.createElement("div")
    modalContainer.className = "modal-container"
    modalContainer.innerHTML = html
    document.body.appendChild(modalContainer)

    const searchModal = modalContainer.querySelector(".serch-modal")
    const modalClose = searchModal.querySelector(".serch-modal-close")

    // 닫기 버튼
    modalClose.addEventListener("click", () => {
      searchModal.classList.remove("show")
      document.body.style.overflow = ""
    })

    // 헤더 검색 버튼 클릭
    const headerSearchBtn = document.querySelector(".serach-btn")
    headerSearchBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (window.innerWidth > 1460) {
        searchModal.classList.add("show") // 클릭 시만 모달 보이게
        document.body.style.overflow = "hidden"
      } else {
        window.location.href = "/product-search/product-search.html"
      }
    })
  })


           

