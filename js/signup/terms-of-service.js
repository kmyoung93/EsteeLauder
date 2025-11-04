document.addEventListener("DOMContentLoaded",()=>{
    let allAgree = document.querySelector(".agree-all");
    let agree = document.querySelectorAll(".agree");
    let nextBut = document.querySelector(".next-step a");

    // 전체 동의시 전부 체크
    allAgree.addEventListener("change",()=>{
        agree.forEach(cb => cb.checked = allAgree.checked);     
    });
    // 개별 체크 상태에 따라 전체 동의 상태 동기화
    agree.forEach(cb=>{
        cb.addEventListener("change",()=>{
            let allChecked = [...agree].every(c=>c.checked);
            // 모든 체크박스가 체크되어 있는지 확인 every=배열의 모든 요소가 조건을 만족하지는 검사
            allAgree.checked = allChecked;
        })
    })
    nextBut.addEventListener("click",(e)=>{
        e.preventDefault();//기본동작막기

        const allChecked = [...agree].every(c=>c.checked);

        if(!allChecked){
            // 하나라도 미동의 시 알림
            alert("모든 약관에 동의해야 합니다.")
            return
        }

        window.location.href ="information.html"
    })
})
