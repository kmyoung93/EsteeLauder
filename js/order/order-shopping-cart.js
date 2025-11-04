// 장바구니 기능 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 모든 체크박스와 삭제 버튼 가져오기
    const checkboxes = document.querySelectorAll('.product-checkbox');
    const deleteButtons = document.querySelectorAll('td figure img[alt="제품 삭제"]');
    const payBtn = document.querySelector('.btn-1');
    const cancelBtn = document.querySelector('.btn-2');
    
    // 개별 제품 가격
    const productPrice = 103000;
    const deliveryFee = 3000; // 고정 배송비

    // 가격 계산 및 업데이트 함수
    function updatePaymentInfo() {
        let selectedCount = 0;
        let totalPrice = 0;

        // 체크된 상품 개수와 총 금액 계산
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedCount++;
                totalPrice += productPrice;
            }
        });

        // 배송비 (선택한 상품이 있을 때만)
        let deliveryCost = 0;
        if (selectedCount > 0) {
            deliveryCost = deliveryFee;
        }

        // 할인 금액
        const discountAmount = 0;

        // 최종 합계
        const finalTotal = totalPrice + deliveryCost - discountAmount;

        // DOM 업데이트
        document.querySelector('.product-cont').textContent = selectedCount;
        document.querySelector('.product-payment').textContent = `₩ ${totalPrice.toLocaleString()}`;
        document.querySelector('.product-discount').textContent = `₩ ${discountAmount.toLocaleString()}`;
        document.querySelector('.product-delivery').textContent = `₩ ${deliveryCost.toLocaleString()}`;
        document.querySelector('.product-totla').textContent = `₩ ${finalTotal.toLocaleString()}`;
    }

    // 체크박스 이벤트 리스너
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', updatePaymentInfo);
    });

    // 삭제 버튼 이벤트 리스너
    deleteButtons.forEach((deleteBtn) => {
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.parentElement.style.cursor = 'pointer';
        
        deleteBtn.parentElement.addEventListener('click', function() {
            if (confirm('이 상품을 장바구니에서 삭제하시겠습니까?')) {
                // 해당 행(tr) 찾아서 삭제
                const row = this.closest('tr');
                row.style.transition = 'opacity 0.3s';
                row.style.opacity = '0';
                
                setTimeout(() => {
                    row.remove();
                    updatePaymentInfo();
                    
                    // 장바구니가 비었는지 확인
                    const remainingRows = document.querySelectorAll('.oreder-list tbody tr');
                    if (remainingRows.length === 0) {
                        showEmptyCart();
                    }
                }, 300);
            }
        });
    });

    // 결제 버튼 클릭
    payBtn.addEventListener('click', function() {
        const selectedCount = document.querySelector('.product-cont').textContent;
        
        if (selectedCount === '0') {
            alert('결제할 상품을 선택해주세요.');
            return;
        }
        
        if (confirm(`선택한 ${selectedCount}개 상품을 결제하시겠습니까?`)) {
            alert('주문서 작성 페이지로 이동합니다.');
            // window.location.href = '../order/order-form.html';
        }
    });

    // 취소 버튼 클릭
    cancelBtn.addEventListener('click', function() {
        if (confirm('장바구니를 취소하고 쇼핑을 계속하시겠습니까?')) {
            window.location.href = '../index.html';
        }
    });

    // 빈 장바구니 표시 함수
    function showEmptyCart() {
        const tbody = document.querySelector('.oreder-list tbody');
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 50px; color: #666;">
                    <p style="font-size: 18px; margin-bottom: 20px;">장바구니가 비어있습니다.</p>
                    <a href="../index.html" style="display: inline-block; padding: 10px 30px; background-color: #000; color: #fff; text-decoration: none; border-radius: 3px;">쇼핑 계속하기</a>
                </td>
            </tr>
        `;
    }

    // 초기 계산
    updatePaymentInfo();
});