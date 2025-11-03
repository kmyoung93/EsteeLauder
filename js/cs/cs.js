document.addEventListener("DOMContentLoaded", () => {
    // 1. 탭 메뉴 기능
    const tabButtons = document.querySelectorAll('.tab div');
    const tabContents = document.querySelectorAll('.tab-descs > div');
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // 모든 탭 버튼의 on 클래스 제거
            tabButtons.forEach(btn => btn.classList.remove('on'));
            // 클릭한 탭 버튼에 on 클래스 추가
            this.classList.add('on');
            
            // 모든 탭 콘텐츠 숨기기
            tabContents.forEach(content => {
                content.classList.remove('on');
                content.style.display = 'none';
            });
            
            // 선택된 탭 콘텐츠만 보이기
            tabContents[index].classList.add('on');
            tabContents[index].style.display = index === 0 ? 'flex' : 'flex';
        });
    });
    
    // 2. FAQ 드롭다운 기능
    const questions = document.querySelectorAll('.cs-drop-txt .question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const dropTxt = this.closest('.cs-drop-txt');
            dropTxt.classList.toggle('active');
        });
    });
    
    // 3. FAQ 카테고리 필터링 기능
    const categories = document.querySelectorAll('.category');
    const dropLists = document.querySelectorAll('.drop-list');
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // 모든 카테고리의 active 클래스 제거
            categories.forEach(cat => cat.classList.remove('category-on'));
            // 클릭한 카테고리에 active 클래스 추가
            this.classList.add('category-on');
            
            // 선택된 카테고리 데이터 가져오기
            const selectedCategory = this.dataset.category;
            
            const allDropTxts = document.querySelectorAll('.cs-drop-txt');
            allDropTxts.forEach(dropTxt => {
                dropTxt.classList.remove('active');
            });
            
            // 모든 드롭 리스트 숨기기
            dropLists.forEach(list => {
                list.style.display = 'none';
            });
            
            // 선택된 카테고리의 드롭 리스트만 보이기
            const targetList = document.querySelector(`[data-list="${selectedCategory}"]`);
            if (targetList) {
                targetList.style.display = 'flex';
            }
        });
    });
});