document.addEventListener("DOMContentLoaded",()=>{
    let nextBut = document.querySelector(".next-step a");
    let form = document.querySelector(".sign-form")
    let userIdCheck = document.querySelector(".user-id-chexk")
    let userPhoneCheck = document.querySelector(".phone-check")
    let userAddressCheck = document.querySelector(".address-check")

    userIdCheck.addEventListener("click",()=>{
    let userid = document.querySelector("#user-id").value.trim();
        
        if (userid) {  // 값이 있으면 true
            alert("사용 가능한 아이디입니다.");
        } else {
            alert("아이디를 입력하세요.");
        }

    })
    userPhoneCheck.addEventListener("click", () => {
        let phone1 = document.querySelector("#user-phon1").value.trim();
        let phone2 = document.querySelector("#user-phon2").value.trim();
        let phone3 = document.querySelector("#user-phon3").value.trim();
        
        if (!phone1 || !phone2 || !phone3) {
            alert("휴대폰 번호를 입력하세요.");
            return;
        }
        
        alert("본인 인증이 완료되었습니다.");
    });
    
    // 주소 찾기 버튼
    userAddressCheck.addEventListener("click", () => {
        let address = document.querySelector("#user-address")
        address.value="서울특별시 강남구 테헤란로 123"
    });

    // 도메인 자동입력
    let emailSelect = document.querySelector('select[name="email-selext"]');
    let emailDomain = document.querySelector('input[name="user-email-domain"]');
    
    // 초기 설정 (페이지 로드 시)
    function updateEmailDomain() {
        let selectedValue = emailSelect.value;
        
        if (selectedValue === "직접 입력") {
            emailDomain.value = "";
            emailDomain.readOnly = false;
            emailDomain.placeholder = "도메인 입력";
        } else {
            emailDomain.value = selectedValue;
            emailDomain.readOnly = true;
        }
    }
    
    // 페이지 로드 시 초기화
    updateEmailDomain();
    
    // 셀렉트 변경 시
    emailSelect.addEventListener("change", updateEmailDomain);

    nextBut.addEventListener("click",(e)=>{
        e.preventDefault();//기본동작막기

        // form 전체 유효성 검사
        if (!form.checkValidity()) {
            // 빈 필드가 있으면 브라우저 기본 에러 메시지 표시
            form.reportValidity();
            alert("작성되지 않은 부분이 있습니다.")
            return;
        }

        // 모든 필드가 채워졌으면 다음 페이지로
        window.location.href = "sign-end.html";
    });
})