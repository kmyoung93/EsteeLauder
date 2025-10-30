document.addEventListener("DOMContentLoaded",()=>{
    const searchInput = document.getElementById('search-store');
    const searchButton = document.querySelector('.search fieldset a');
    const storeItems = document.querySelectorAll('.store');

    function filterStores() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // 검색어가 비어있으면 모두 보여주기
        if (searchTerm === '') {
            storeItems.forEach(store => {
                store.style.display = 'block';
            });
            return;
        }
        
        storeItems.forEach(store => {
            const storeName = store.querySelector('.store-name').textContent.toLowerCase();
            const storeAddress = store.querySelector('p').textContent.toLowerCase();
            
            if (storeName.includes(searchTerm) || storeAddress.includes(searchTerm)) {
                store.style.display = 'block';
            } else {
                store.style.display = 'none';
            }
        });
    }

    // 실시간 검색
    searchInput.addEventListener('input', filterStores);

    // 검색 버튼 클릭
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        filterStores();
    });

    // Enter 키
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterStores();
        }
    });
})