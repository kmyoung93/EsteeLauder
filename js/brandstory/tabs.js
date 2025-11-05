// 페이지 로드 시 첫 번째 탭 활성화
document.addEventListener('DOMContentLoaded', () => {
   
// ==================== 탭 전환 기능 ====================

// 탭 버튼들과 섹션들 가져오기
const tabButtons = document.querySelectorAll('.tabs span');
const tabSections = document.querySelectorAll('.tab-value-descriptions > section');

// 각 탭 버튼에 클릭 이벤트 추가
tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // 모든 탭 버튼에서 'on' 클래스 제거
        tabButtons.forEach(btn => btn.classList.remove('on'));
        
        // 클릭된 탭 버튼에 'on' 클래스 추가
        button.classList.add('on');
        
        // 모든 섹션 숨기기
        tabSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // 해당 인덱스의 섹션만 보이기
        tabSections[index].style.display = 'block';
    });
});

});
