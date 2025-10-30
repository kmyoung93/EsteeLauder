document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "new_1.png",
            color: [
                "#d4353c",
                "#f27886",
                "#fa795a",
                "#be4f44",
                "#e77367",
                "#e66c72",
                "#ba4f5d"
            ],
            name: "퓨어 컬러 멜트 온 글로스틱",
            ename: "PURE COLOR",
            price: 54000
        },

        {
            code: 2,
            thmb: "new_2.png",
            name: "리-뉴트리브 래디언스 UV 플루이드",
            ename: "Re-Nutriv",
            price: 170000
        },
        
        {
            code: 3,
            thmb: "new_3.png",
            name: "리-뉴트리브 에이지 리버설 아이크림",
            ename: "Ultimate Diamond",
            price: 250000
        },

        {
            code: 4,
            thmb: "new_4.png",
            name: "퍼펙셔니스트 프로 래피드 브라이트닝 트리트먼트 퍼멘트3 + 비타민 C",
            ename: "Perfectionist Pro",
            price: 232000
        },

        {
            code: 5,
            thmb: "new_5.png",
            name: "어드밴스드 나이트 리페어 오버나이트 트리트먼트",
            ename: "Advanced Night Repair",
            price: 229000
        },

        {
            code: 6,
            thmb: "new_6.png",
            color: [
                "#be464e",
                "#942a19",
                "#a90f13",
                "#af1551",
                "#984d48",
                "#944348",
                "#b15b51",
                "#b06359"
            ],
            name: "퓨어 컬러 익스플리시트 실크 매트 립스틱",
            ename: "Pure Color",
            price: 56000
        },

        {
            code: 7,
            thmb: "new_7.png",
            name: "리바이탈라이징 수프림 플러스 나이트 파워 바운스 크림",
            ename: "Revitalizing Supreme+",
            price: 234000
        },

        {
            code: 8,
            thmb: "new_8.png",
            name: "리비탈라이징 수프림 플러스 브라이트 래디언스 파워 소프트 크림",
            ename: "Revitalizing Supreme+",
            price: 200000
        },

        {
            code: 9,
            thmb: "new_9.png",
            name: "퍼펙셔니스트 프로 다이나믹 디펜스 UV 밀크 SPF50+ / PA++++",
            ename: "Perfectionist Pro",
            price: 93000
        },

        {
            code: 10,
            thmb: "new_10.png",
            name: "퍼펙셔니스트 프로 래피드 브라이트닝 트리트먼트 퍼멘트3 + 비타민 C",
            ename: "Perfectionist Pro",
            price: 232000
        },

        {
            code: 11,
            thmb: "new_11.png",
            color: [
                "#fdb1bc",
                "#fb8381",
                "#f87f67",
                "#cf5f53",
                "#ea656a"
            ],
            name: "퓨어 컬러 젤리 글로우 밤",
            ename: "Pure Color",
            price: 38000
        },

        {
            code: 12,
            thmb: "new_12.png",
            color: [
                "#c9924d"
            ],
            name: "더블웨어 세컨 스킨 블러 쿠션",
            ename: "Double Wear",
            price: 103000
        },

        {
            code: 13,
            thmb: "new_13.png",
            color: [
                "#d6a46b"
            ],
            name: "더블웨어 소프트 글로우 매트 쿠션 리필 SPF45 / PA+++",
            ename: "Double Wear",
            price: 63000
        },

        {
            code: 14,
            thmb: "new_14.png",
            color: [
                "#e2b06f"
            ],
            name: "더블웨어 소프트 글로우 매트 쿠션 SPF45 / PA+++",
            ename: "Double Wear",
            price: 103000
        },

        {
            code: 15,
            thmb: "new_15.png",
            name: "리비탈라이징 수프림 플러스 브라이트 래디언스 파워 소프트 밀키 로션",
            ename: "Revitalizing Supreme+",
            price: 177000
        },

        {
            code: 16,
            thmb: "new_16.png",
            color: [
                "#d5b495"
            ],
            name: "더블웨어 세컨 스킨 블러 쿠션 리필",
            ename: "Double Wear",
            price: 63000
        },

        {
            code: 17,
            thmb: "new_17.png",
            name: "리바이탈라이징 수프림+ 옵티마이징 파워 트리트먼트 로션 200ml",
            ename: "Revitalizing Supreme+",
            price: 95000
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
                img.setAttribute("src", "./resource/new/like-act.svg");
            } else {
                img.setAttribute("src", "./resource/new/like.svg");
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
                    <img src="./resource/new/${product.thmb}" alt="${product.name}">
                </figure>
                <div class="title">
                    <section>
                        <h3>${product.name}</h3>
                        <span class="btn-like-heart">
                            <img src="./resource/new/like.svg" alt="좋아요">
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