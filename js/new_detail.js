document.addEventListener("DOMContentLoaded",()=>{
    let dropBtn = document.querySelectorAll(".drop-btn")
    let popupBtn = document.querySelector(".popup-btn")

    dropBtn.forEach((btn,b)=>{
        btn.addEventListener("click",()=>{
            btn.parentElement.parentElement.classList.toggle("on")
        })    
    })

    let reviewWrap = document.querySelector(".review_wrap")
    let closed = document.querySelector(".closed")

    popupBtn.addEventListener("click",()=>{
        reviewWrap.classList.add("on")
    })

    closed.addEventListener("click",()=>{
        reviewWrap.classList.remove("on")
    })
    

    const selectDisplay = document.getElementById('selectDisplay');
    const selectOptions = document.getElementById('selectOptions');
    const hiddenInput = document.getElementById('categoryValue');

    // 셀렉트 열기/닫기
    selectDisplay.addEventListener('click', () => {
    selectOptions.classList.toggle('show');
    });

    // 옵션 선택
    selectOptions.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (li) {
        const value = li.dataset.value;
        const text = li.querySelector('.text').textContent;
        
        // 숨겨진 input에 값 저장
        hiddenInput.value = value;
        
        // 화면에 표시
        selectDisplay.innerHTML = li.innerHTML;
        
        // 드롭다운 닫기
        selectOptions.classList.remove('show');
    }
    });

    // 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
        selectOptions.classList.remove('show');
    }
    });

})