document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. localStorage에서 주문 데이터 불러오기 ==========
    function loadOrderData() {
        try {
            const lastOrder = localStorage.getItem('lastOrder');
            
            if (!lastOrder) {
                console.warn('저장된 주문 정보가 없습니다.');
                showNoOrderMessage();
                return null;
            }
            
            const orderData = JSON.parse(lastOrder);
            console.log('불러온 주문 정보:', orderData);
            return orderData;
            
        } catch (error) {
            console.error('주문 데이터 로드 오류:', error);
            showNoOrderMessage();
            return null;
        }
    }

    // ========== 2. 주문 정보가 없을 때 메시지 표시 ==========
    function showNoOrderMessage() {
        const tbody = document.querySelector('.oreder-list tbody');
        if (tbody) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 50px; color: #666;">
                        <p style="font-size: 18px; margin-bottom: 20px;">주문 정보를 불러올 수 없습니다.</p>
                        <a href="/EsteeLauder/index.html" style="display: inline-block; padding: 10px 30px; background-color: #000; color: #fff; text-decoration: none; border-radius: 3px;">메인으로 이동</a>
                    </td>
                </tr>
            `;
        }
    }

    // ========== 3. 주문 상품 리스트 렌더링 ==========
    function renderOrderList(orderData) {
        const tbody = document.querySelector('.oreder-list tbody');
        if (!tbody || !orderData || !orderData.products) return;

        tbody.innerHTML = '';
        
        orderData.products.forEach(product => {
            const row = document.createElement('tr');
            const totalPrice = product.price * product.quantity;
            
            row.innerHTML = `
                <td>${orderData.orderNumber}</td>
                <td>
                    <div class="product">
                        <figure><img src="${product.image}" alt="${product.nameKo} 이미지"></figure>
                        <div class="product-details">
                            <div class="product-name">
                                <p>${product.name}</p>
                                <p>${product.nameKo}</p>
                            </div>
                            ${product.color ? `<p class="color-info">색상: ${product.color}</p>` : ''}
                            <p class="quantity-info">수량: ${product.quantity}</p>
                            <p class="price">₩${product.price.toLocaleString()}</p>
                        </div>
                    </div>
                </td>
                <td class="quantity-col">${product.quantity}</td>
                <td class="price-col">₩${totalPrice.toLocaleString()}</td>
                <td>상품준비중</td>
            `;
            
            tbody.appendChild(row);
        });
    }

    // ========== 4. 주문 완료 메시지는 HTML 그대로 사용 ==========

    // ========== 5. 주문 상세 정보 섹션은 표시하지 않음 ==========

    // ========== 6. 계속 쇼핑하기 버튼 이벤트 ==========
    const continueShoppingBtn = document.querySelector('.btn-1');
    
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('cartItems');
            window.location.href = '/EsteeLauder/index.html';
        });
    }
    function initDeliveryTracking() {
        const deliveryStatus = document.querySelectorAll('td:last-child');
        
        // 데모용: 5초 후 배송 상태 업데이트
        setTimeout(() => {
            deliveryStatus.forEach(status => {
                if (status.textContent === '상품준비중') {
                    status.textContent = '상품준비중';
                    status.style.color = 'var(--mood-in-blue-main-900)';
                    status.style.fontWeight = '600';
                }
            });
            console.log('배송 상태가 업데이트되었습니다: 상품준비중');
        }, 5000);
    }
    // ========== 초기화 실행 ==========
    const orderData = loadOrderData();
    
    if (orderData) {
        renderOrderList(orderData);
        simulateEmailConfirmation(orderData);
        initDeliveryTracking();
    }

    console.log('주문 완료 페이지 로드 완료');
    console.log('💡 주문 정보 확인: getOrderInfo() 또는 getOrderHistory()를 콘솔에 입력하세요.');
});