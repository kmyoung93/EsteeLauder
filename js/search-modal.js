document.addEventListener("DOMContentLoaded", () => {
  const searchModal = document.querySelector(".serch-modal");
  const modalClose = document.querySelector(".serch-modal-close");

  // 화면 너비에 따라 처리
  if (window.innerWidth >= 1460) {
    // PC → 모달 열기
    searchModal.hidden = false;
    document.body.style.overflow = "hidden"; // 스크롤 방지
  } else {
    // 모바일/태블릿 → 모달 안 띄우고 페이지 이동 (a 태그 자체가 처리)
    searchModal.hidden = true;
  }

  // 닫기 버튼 동작
  modalClose.addEventListener("click", () => {
    searchModal.hidden = true;
    document.body.style.overflow = "";
  });
});

// 1460이하면 모달 안뜨고 바로 검색 페이지로 가게 메뉴스크립트에다가 넣어줘야함
// // ✅ header.js (헤더 전용 스크립트)
// document.addEventListener("DOMContentLoaded", () => {
//   const headerSearchBtn = document.querySelector(".header-search-btn"); // 헤더 검색 아이콘

//   headerSearchBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (window.innerWidth > 1460) {
//       // PC → 모달 열기 (모달 스크립트에서 처리)
//       const modal = document.querySelector(".serch-modal");
//       modal.hidden = false;
//       document.body.style.overflow = "hidden";
//     } else {
//       // 모바일/태블릿 → 검색 페이지로 이동
//       window.location.href = "../product-search/product-search.html";
//     }
//   });
// });