document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "all_1.png",
            name: "더블웨어 리-뉴트리브 에이지 리버설 아이크림",
            ename: "Ultimate Diamond",
            price: 250000
        },

        {
            code: 2,
            thmb: "all_2.png",
            name: "퍼펙셔니스트 프로 다이나믹 디펜스 UV 밀크 SPF50+ / PA++++",
            ename: "Perfectionist Pro",
            price: 93000
        },
        
        {
            code: 3,
            thmb: "all_3.png",
            name: "리바이탈라이징 수프림 플러스 나이트 파워 바운스 크림",
            ename: "Revitalizing Supreme+",
            price: 192000
        },

        {
            code: 4,
            thmb: "all_4.png",
            name: "리비탈라이징 수프림 플러스 브라이트 래디언스 파워 소프트 밀키 로션",
            ename: "Revitalizing Supreme+",
            price: 177000
        },

        {
            code: 5,
            thmb: "all_5.png",
            name: "마이크로 에센스 트리트먼트 로션 200ml ",
            ename: "Micro Essence",
            price: 248000
        },

        {
            code: 6,
            thmb: "all_6.png",
            name: "퍼펙셔니스트 프로 래피드 브라이트닝 트리트먼트 퍼멘트3 + 비타민 C",
            ename: "Perfectionist Pro",
            price: 232000
        },

        {
            code: 7,
            thmb: "all_7.png",
            name: "리바이탈라이징 수프림+ 옵티마이징 파워 트리트먼트 로션 200ml",
            ename: "Revitalizing Supreme+",
            price: 95000
        },

        {
            code: 8,
            thmb: "all_8.png",
            name: "리비탈라이징 수프림 플러스 브라이트 래디언스 파워 소프트 크림",
            ename: "Revitalizing Supreme+",
            price: 200000
        },

        {
            code: 9,
            thmb: "all_9.png",
            name: "리-뉴트리브 래디언스 UV 플루이드",
            ename: "Re-Nutriv",
            price: 170000
        },

        {
            code: 10,
            thmb: "all_10.png",
            name: "퍼펙셔니스트 프로 래피드 펌+리프트 트리트먼트 세럼 50ml",
            ename: "Perfectionist Pro",
            price: 232000
        },

        {
            code: 11,
            thmb: "all_11.png",
            name: "리-뉴트리브 다이아몬드 에너지 아이 크림",
            ename: "Re-Nutriv",
            price: 520000
        },

        {
            code: 12,
            thmb: "all_12.png",
            name: "어드밴스드 나이트 리페어 레스큐 솔루션",
            ename: "Advanced Night Repair",
            price: 150000
        },

        {
            code: 13,
            thmb: "all_13.png",
            name: "어드밴스드 나이트 리페어 갈색병 아이 젤 크림15ml + 어드밴스드 나이트 리페어 싱크로나이즈드 멀티 리커버리 컴플렉스 30ml",
            ename: "Online Exclusive Value Set Save 30% for a Limited Time",
            price: 257000
        },

        {
            code: 14,
            thmb: "all_14.png",
            name: "어드밴스드 나이트 리페어 아이 리프트+ 스컬프팅 세럼",
            ename: "Advanced Night Repair",
            price: 158000
        },

        {
            code: 15,
            thmb: "all_15.png",
            name: "퍼펙틀리 클린 폼 클렌저",
            ename: "Perfectly Clean",
            price: 55000
        },

        {
            code: 16,
            thmb: "all_16.png",
            name: "리-뉴트리브 얼티미트 다이아몬드 트랜스포머티브 아이 세럼",
            ename: "Re-Nutriv",
            price: 305000
        },

        {
            code: 17,
            thmb: "all_17.png",
            name: "리-뉴트리브 얼티미트 다이아몬드 리바이탈라이징 마스크 50ml",
            ename: "Re-Nutriv",
            price: 690000
        },

        {
            code: 18,
            thmb: "all_18.png",
            name: "어드밴스드 나이트 리페어 오버나이트 트리트먼트",
            ename: "Advanced Night Repair",
            price: 229000
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
            <a href="/detail_page/skincare_detail.html?cid=${product.code}">
                <figure class="product-img">
                    <img src="../resource/skincare/all/${product.thmb}" alt="${product.name}">
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