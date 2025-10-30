document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "lotion_1.png",
            name: "리비탈라이징 수프림 플러스 브라이트 래디언스 파워 소프트 밀키 로션",
            ename: "Revitalizing Supreme+",
            price: 177000
        },
        {
            code: 2,
            thmb: "lotion_2.jpg",
            name: "리바이탈라이징 수프림 플러스 나이트 파워 바운스 크림",
            ename: "Perfectionist Pro",
            price: 192000
        },
        {
            code: 3,
            thmb: "lotion_3.jpg",
            name: "리바이탈라이징 수프림+ 옵티마이징 파워 트리트먼트 로션 200ml",
            ename: "Revitalizing Supreme+",
            price: 95000
        },
        {
            code: 4,
            thmb: "lotion_4.jpg",
            name: "리비탈라이징 수프림 플러스 브라이트 래디언스 파워 소프트 크림",
            ename: "Revitalizing Supreme+",
            price: 200000
        },
        {
            code: 5,
            thmb: "lotion_5.jpg", 
            name: "리-뉴트리브 얼티미트 다이아몬드 리바이탈라이징 마스크 50ml",
            ename: "Re-Nutriv",
            price: 690000
        },
        
    ]

    // .product ul 선택
    const productList = document.querySelector('.product');

     //하트 눌렀을 때 색깔 변하기

    productList.addEventListener("click", (event) => {
        // 클릭된 요소가 .btn-like-heart이거나 그 안의 img인지 확인
        let btn = event.target.closest(".btn-like-heart");
        
        if (btn) {
            event.preventDefault(); // a태그의 기본 기능을 억제
            
            const img = btn.children[0];
            
            if (img.getAttribute("src").includes("act") == false) {
                img.setAttribute("src", "../resource/new/like-act.svg");
            } else {
                img.setAttribute("src", "../resource/new/like.svg");
            }
        }
    });

    // 제품 렌더링
    products.forEach(product => {
        const li = document.createElement('li');
        
        // 색상이 있을 때만 .product-color 영역 생성
        const colorSection = product.color && product.color.length > 0
            ? `<div class="product-color">
                ${product.color.map(color => 
                    `<span style="background-color: ${color}"></span>`
                ).join('')}
               </div>`
            : '';
        
        li.innerHTML = `
            <a href="#">
                <figure class="product-img">
                    <img src="../resource/skincare/lotion/${product.thmb}" alt="${product.name}">
                </figure>
                <div class="title">
                    <section>
                        <h3>${product.name}</h3>
                        <span class="btn-like-heart">
                            <img src="../resource/new/like.svg" alt="좋아요">
                        </span>
                    </section>
                    <p class="ename">${product.ename}</p>
                    ${colorSection}
                    <p class="price">₩${product.price.toLocaleString()}</p>
                </div>
            </a>
        `;
        
        productList.appendChild(li);
    });

   


})