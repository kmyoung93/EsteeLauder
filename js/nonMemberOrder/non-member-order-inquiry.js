document.addEventListener("DOMContentLoaded", () => {
    let orderCheck = document.querySelector(".btn-1");

    orderCheck.addEventListener("click", () => {
        let orderNumber = document.querySelector("#order-number").value.trim();
        let orderName = document.querySelector("#order-name").value.trim();
        
        if (!orderNumber || !orderName) {
            alert("정확한 정보를 입력해주세요");
            return;
        }
        
        window.location.href = "../nonMemberOrder/non-member-order-inquiry.html";
    });
});