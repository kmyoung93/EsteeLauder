// 주문서 작성 페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. 장바구니에서 넘어온 데이터 불러오기 ==========
    let selectedProducts = [];
    
    // localStorage에서 장바구니 선택 제품 불러오기
    const savedCartItems = localStorage.getItem('selectedCartItems');
    
    if (savedCartItems) {
        try {
            selectedProducts = JSON.parse(savedCartItems);
            console.log('장바구니에서 불러온 제품:', selectedProducts);
        } catch (error) {
            console.error('장바구니 데이터 로드 오류:', error);
        }
    }
    
    // 데이터가 없으면 기본 데이터 사용 (테스트용)
    if (selectedProducts.length === 0) {
        console.log('장바구니 데이터가 없어 기본 데이터를 사용합니다.');
        selectedProducts = [
            {
                name: 'Double Wear',
                nameKo: '더블웨어 세컨 스킨 블러 쿠션',
                color: '1W2 샌드',
                quantity: 1,
                price: 103000,
                image: '../resource/order/order-finsh/Revitalizing Supreme.jpg'
            }
        ];
    }

    // ========== 2. 주문 상품 리스트 렌더링 ==========
    function renderOrderList() {
        const tbody = document.querySelector('.oreder-list tbody');
        if (!tbody) return;

        tbody.innerHTML = '';
        
        selectedProducts.forEach(product => {
            const row = document.createElement('tr');
            const totalPrice = product.price * product.quantity;
            
            row.innerHTML = `
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
                            <h4 class="price">₩${product.price.toLocaleString()}</h4>
                        </div>
                    </div>
                </td>
                <td class="quantity-col">${product.quantity}</td>
                <td class="price-col"><h4>₩${totalPrice.toLocaleString()}</h4></td>
            `;
            
            tbody.appendChild(row);
        });
    }

    // ========== 3. 결제 금액 계산 및 업데이트 ==========
    function updatePaymentInfo() {
        let productCount = 0;
        let totalPrice = 0;

        selectedProducts.forEach(product => {
            productCount += product.quantity;
            totalPrice += product.price * product.quantity;
        });

        const discountAmount = 0; // 할인 금액 (필요시 계산 로직 추가)
        const deliveryFee = 3000; // 배송비 3,000원 고정
        const finalTotal = totalPrice + deliveryFee - discountAmount;

        // DOM 요소 확인 및 업데이트
        const contElement = document.querySelector('.product-cont');
        const paymentElement = document.querySelector('.product-payment');
        const discountElement = document.querySelector('.product-discount');
        const deliveryElement = document.querySelector('.product-delivery');
        const totalElement = document.querySelector('.product-totla');

        if (contElement) contElement.textContent = productCount;
        if (paymentElement) paymentElement.textContent = `₩ ${totalPrice.toLocaleString()}`;
        if (discountElement) discountElement.textContent = `₩ ${discountAmount.toLocaleString()}`;
        if (deliveryElement) deliveryElement.textContent = `₩ ${deliveryFee.toLocaleString()}`;
        if (totalElement) totalElement.textContent = `₩ ${finalTotal.toLocaleString()}`;
    }

    // ========== 4. 전화번호 입력 자동 이동 ==========
    const phoneInputs = {
        input1: document.getElementById('user-phon1'),
        input2: document.getElementById('user-phon2'),
        input3: document.getElementById('user-phon3')
    };

    if (phoneInputs.input1) {
        phoneInputs.input1.addEventListener('input', function() {
            if (this.value.length >= 3) {
                phoneInputs.input2.focus();
            }
        });
    }

    if (phoneInputs.input2) {
        phoneInputs.input2.addEventListener('input', function() {
            if (this.value.length >= 4) {
                phoneInputs.input3.focus();
            }
        });
    }

    // ========== 5. 이메일 도메인 선택 ==========
    const emailSelect = document.querySelector('.email-selext');
    const emailDomainInput = document.querySelector('input[name="order-email-domain"]');

    if (emailSelect && emailDomainInput) {
        emailSelect.addEventListener('change', function() {
            if (this.value === '직접 입력') {
                emailDomainInput.value = '';
                emailDomainInput.readOnly = false;
                emailDomainInput.focus();
            } else {
                emailDomainInput.value = this.value;
                emailDomainInput.readOnly = true;
            }
        });
    }

    // ========== 6. 주소 찾기 ==========
    const addressCheckBtn = document.querySelector('.address-check');
    const addressInput = document.querySelector('#order-address');
    const addressDetailInput = document.querySelector('.address-box-detail');

    if (addressCheckBtn) {
        addressCheckBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 데모용 주소 입력
            const demoAddress = '서울특별시 강남구 테헤란로 123';
            addressInput.value = demoAddress;
            addressDetailInput.focus();
            alert('주소가 입력되었습니다.');
        });
    }

    // ========== 7. 배송 요청사항 선택 ==========
    const deliverySelect = document.querySelector('.delivery-request');
    
    if (deliverySelect) {
        deliverySelect.addEventListener('change', function() {
            if (this.value === '직접 작성') {
                const customRequest = prompt('배송 요청사항을 입력해주세요:');
                if (customRequest) {
                    // 옵션을 동적으로 추가
                    const newOption = document.createElement('option');
                    newOption.value = customRequest;
                    newOption.textContent = customRequest;
                    newOption.selected = true;
                    this.appendChild(newOption);
                }
            }
        });
    }

    // ========== 8. 폼 유효성 검사 ==========
    function validateForm() {
        const orderName = document.getElementById('order-name');
        const phone1 = document.getElementById('user-phon1');
        const phone2 = document.getElementById('user-phon2');
        const phone3 = document.getElementById('user-phon3');
        const emailId = document.getElementById('order-email-id');
        const emailDomain = document.querySelector('input[name="order-email-domain"]');
        const address = document.getElementById('order-address');
        const addressDetail = document.querySelector('.address-box-detail');
        const paymentMethods = document.querySelectorAll('.order-payment');

        // 주문자 이름 확인
        if (!orderName.value.trim()) {
            alert('주문자 이름을 입력해주세요.');
            orderName.focus();
            return false;
        }

        // 전화번호 확인
        if (!phone1.value || !phone2.value || !phone3.value) {
            alert('전화번호를 모두 입력해주세요.');
            if (!phone1.value) phone1.focus();
            else if (!phone2.value) phone2.focus();
            else phone3.focus();
            return false;
        }

        // 전화번호 유효성 검사
        if (phone1.value.length < 3 || phone2.value.length < 4 || phone3.value.length < 4) {
            alert('올바른 전화번호를 입력해주세요.');
            return false;
        }

        // 이메일 확인 (선택사항이지만 입력했다면 유효성 검사)
        if (emailId.value.trim()) {
            if (!emailDomain.value.trim()) {
                alert('이메일 도메인을 입력하거나 선택해주세요.');
                emailDomain.focus();
                return false;
            }
            
            const emailPattern = /^[^\s@]+$/;
            if (!emailPattern.test(emailId.value)) {
                alert('올바른 이메일 주소를 입력해주세요.');
                emailId.focus();
                return false;
            }
        }

        // 주소 확인
        if (!address.value.trim()) {
            alert('주소를 입력해주세요.');
            addressCheckBtn.click();
            return false;
        }

        if (!addressDetail.value.trim()) {
            alert('상세주소를 입력해주세요.');
            addressDetail.focus();
            return false;
        }

        // 결제 방법 선택 확인
        let paymentSelected = false;
        paymentMethods.forEach(method => {
            if (method.checked) {
                paymentSelected = true;
            }
        });

        if (!paymentSelected) {
            alert('결제 방법을 선택해주세요.');
            return false;
        }

        return true;
    }

    // ========== 9. 결제 버튼 클릭 ==========
    const payBtn = document.querySelector('.btn-1');
    
    if (payBtn) {
        payBtn.addEventListener('click', function() {
            if (validateForm()) {
                // 주문 정보 수집
                const orderData = {
                    orderName: document.getElementById('order-name').value,
                    phone: `${phoneInputs.input1.value}-${phoneInputs.input2.value}-${phoneInputs.input3.value}`,
                    email: document.getElementById('order-email-id').value + '@' + document.querySelector('input[name="order-email-domain"]').value,
                    address: document.getElementById('order-address').value,
                    addressDetail: document.querySelector('.address-box-detail').value,
                    deliveryRequest: document.querySelector('.delivery-request').value,
                    paymentMethod: document.querySelector('.order-payment:checked').value,
                    products: selectedProducts,
                    totalAmount: document.querySelector('.product-totla').textContent
                };

                console.log('주문 정보:', orderData);

                // 확인 메시지
                const totalAmount = document.querySelector('.product-totla').textContent;
                if (confirm(`${totalAmount} 결제를 진행하시겠습니까?`)) {
                    // 로딩 표시
                    payBtn.textContent = '결제 처리중...';
                    payBtn.style.opacity = '0.6';
                    payBtn.style.cursor = 'not-allowed';

                    // localStorage에 주문 데이터 저장
                    try {
                        // 주문 번호 생성 (날짜 + 랜덤)
                        const orderNumber = 'ORD' + Date.now() + Math.floor(Math.random() * 1000);
                        orderData.orderNumber = orderNumber;
                        orderData.orderDate = new Date().toLocaleString('ko-KR');
                        
                        // localStorage에 저장
                        localStorage.setItem('lastOrder', JSON.stringify(orderData));
                        
                        // 기존 주문 목록 가져오기
                        let orderHistory = localStorage.getItem('orderHistory');
                        orderHistory = orderHistory ? JSON.parse(orderHistory) : [];
                        
                        // 새 주문 추가
                        orderHistory.push(orderData);
                        
                        // 주문 목록 저장 (최근 10개만 유지)
                        if (orderHistory.length > 10) {
                            orderHistory = orderHistory.slice(-10);
                        }
                        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
                        
                        console.log('주문 데이터 저장 완료:', orderData);
                        
                        setTimeout(() => {
                            alert(`결제가 완료되었습니다!\n주문번호: ${orderNumber}`);
                            window.location.href = './order-finsh.html';
                        }, 1500);
                        
                    } catch (error) {
                        console.error('데이터 저장 오류:', error);
                        alert('주문 처리 중 오류가 발생했습니다.');
                        payBtn.textContent = '결제';
                        payBtn.style.opacity = '1';
                        payBtn.style.cursor = 'pointer';
                    }
                }
            }
        });
    }

    // ========== 10. 취소 버튼 클릭 ==========
    const cancelBtn = document.querySelector('.btn-2');
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (confirm('주문을 취소하고 장바구니로 돌아가시겠습니까?')) {
                window.history.back();
                // 또는 window.location.href = './cart.html';
            }
        });
    }

    // ========== 11. 결제 방법 선택 시 추가 정보 표시 (선택사항) ==========
    const paymentRadios = document.querySelectorAll('.order-payment');
    
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedMethod = this.parentElement.textContent.trim();
            console.log(`선택된 결제 방법: ${selectedMethod}`);
        });
    });

    // ========== 12. 숫자만 입력 (전화번호 필드) ==========
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key < '0' || e.key > '9') {
                if (e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
                    e.preventDefault();
                }
            }
        });

        // 최대 길이 제한
        input.addEventListener('input', function() {
            const maxLength = parseInt(this.getAttribute('maxlength'));
            if (this.value.length > maxLength) {
                this.value = this.value.slice(0, maxLength);
            }
        });
    });

    // ========== 13. 입력 필드 포커스 효과는 사용하지 않음 ==========
    const allInputs = document.querySelectorAll('input[type="text"], input[type="number"]');

    // ========== 14. 페이지 이탈 방지 (작성중인 내용 보호) ==========
    let formChanged = false;

    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            formChanged = true;
        });
    });

    window.addEventListener('beforeunload', function(e) {
        if (formChanged) {
            e.preventDefault();
            e.returnValue = ''; // Chrome에서 필요
            return '작성중인 내용이 있습니다. 페이지를 나가시겠습니까?';
        }
    });

    // 결제 완료 시 이탈 방지 해제
    if (payBtn) {
        payBtn.addEventListener('click', function() {
            if (validateForm()) {
                formChanged = false;
            }
        });
    }

    // ========== 초기화 실행 ==========
    console.log('페이지 로드 시작...');
    
    renderOrderList();
    updatePaymentInfo();

    // 이메일 도메인 초기값 설정
    if (emailDomainInput) {
        emailDomainInput.readOnly = false;
    }

    console.log('주문서 작성 페이지 로드 완료');
    console.log('선택된 상품:', selectedProducts);
});