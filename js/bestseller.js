document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "bestseller_1.png",
            color: [
                "#E2B16F",
                "#E6BB98",
                "#DEC09E",
                "#F0C99A",
                "#C9924C",
                "#DFA567",
                "#C9A268",
                "#D5B280",
                "#D5B495",
                "#D9A56D",
                "#C99D6F",
                "#C88D4E",
                "#C49B62",
                "#FAC8A8",
                "#C8A265",
                "#D0A26E",
                "#D09771",
                "#D7A56B",
                "#D9A666",
            ],
            name: "더블웨어 파운데이션",
            ename: "Double Wear",
            price: 91000
        },

        {
            code: 2,
            thmb: "bestseller_2.png",
            name: "마이크로 에센스 트리트먼트 로션 200ml",
            ename: "Micro Essence",
            price: 220000
        },
        
        {
            code: 3,
            thmb: "bestseller_3.png",
            name: "리바이탈라이징 수프림 플러스 유스 파워 소프트 크림",
            ename: "Revitalizing Supreme+",
            price: 118000
        },

        {
            code: 4,
            thmb: "bestseller_4.png",
            name: "어드밴스드 나이트 리페어 아이 리프트+ 스컬프팅 세럼",
            ename: "Advanced Night Repair",
            price: 158000
        },

        {
            code: 5,
            thmb: "bestseller_5.png",
            name: "퍼펙셔니스트 프로 래피드 브라이트닝 트리트먼트 퍼멘트3 + 비타민 C ",
            ename: "Perfectionist Pro",
            price: 232000
        },

        {
            code: 6,
            thmb: "bestseller_6.png",
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
            code: 7,
            thmb: "bestseller_7.png",
            name: "퍼펙셔니스트 프로 래피드 펌+리프트 트리트먼트 세럼 50ml",
            ename: "Perfectionist Pro",
            price: 232000
        },

        {
            code: 8,
            thmb: "bestseller_8.png",
            color: [
                "#E2B16F",
                "#C9A268",
                "#D5B495",
                "#D7A56B",
                "#C9924C",
                "#DFA567"
            ],
            name: "더블웨어 소프트 글로우 매트 쿠션 SPF45 / PA+++",
            ename: "Double Wear",
            price: 103000
        },

        {
            code: 9,
            thmb: "bestseller_9.png",
            color: [
                "#C9924C",
                "#D7A56B",
                "#DFA567",
                "#D5B495",
                "#E2B16F"
            ],
            name: "더블웨어 세컨 스킨 블러 쿠션",
            ename: "Double Wear",
            price: 103000
        },

        {
            code: 10,
            thmb: "bestseller_10.png",
            color: [
                "#C9924C",
                "#D7A56B",
                "#DFA567",
                "#D5B495",
                "#E2B16F"
            ],
            name: "더블웨어 세컨 스킨 블러 쿠션 리필",
            ename: "Double Wear",
            price: 63000
        },

        {
            code: 11,
            thmb: "bestseller_11.png",
            color: [
                "#AA1F2B",
                "#B51F30",
                "#983B33",
                "#B5707B",
                "#CB6674",
                "#AC4452",
                "#A84A56",
                "#BA2C55",
                "#BC6875",
                "#D43752",
                "#B14D55",
                "#D92D44",
                "#C74661",
            ],
            name: "퓨어 컬러 립스틱",
            ename: "Pure Color",
            price: 55000
        },

        {
            code: 12,
            thmb: "bestseller_12.png",
            color: [
                "#c9924d"
            ],
            name: "더블웨어 세컨 스킨 크림 프라이머 SPF20 / PA++",
            ename: "Double Wear",
            price: 87000
        },

        {
            code: 13,
            thmb: "bestseller_13.png",
            color: [
                "#d6a46b"
            ],
            name: "갈색병 세럼 115ml",
            ename: "Advanced Night Repair",
            price: 127000
        },

        {
            code: 14,
            thmb: "bestseller_14.png",
            color: [
                "#E2B16F",
                "#C9A268",
                "#D5B495",
                "#D7A56B",
                "#C9924C",
                "#DFA567"
            ],
            name: "더블웨어 소프트 글로우 매트 쿠션 리필 SPF45 / PA+++",
            ename: "Double Wear",
            price: 63000
        },

        {
            code: 15,
            thmb: "bestseller_15.png",
            name: "플레져 바디로션",
            ename: "Estée Lauder Pleasures",
            price: 79000
        },

        {
            code: 16,
            thmb: "bestseller_16.png",
            color: [
                "#D6B08D",
                "#D5AB80",
                "#DCB999",
                "#DDBEA2",
                "#E2C09B",
                "#DFC4A9",
                "#DFC29E",
                "#E0BD9D",
                "#E1C8B1",
                "#D5B79C",
                "#DCBEA2"
            ],
            name: "퓨처리스트 파운데이션",
            ename: "Futurist Aqua Brilliance",
            price: 110000
        },

        {
            code: 17,
            thmb: "bestseller_17.png",
            color: [
                "#E1C2AE",
                "#D6B189",
                "#E4CCB6",
                "#DFC0A2",
                "#D8BBA1",
                "#DFC7AF"
            ],
            name: "더블웨어 스테이-인-플레이스 컨실러",
            ename: "Double Wear",
            price: 52000
        },

        {
            code: 18,
            thmb: "bestseller_18.png",
            name: "마이크로 에센스 트리트먼트 로션 프레시 200ml",
            ename: "Micro Essence",
            price: 220000
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
        const colorGroupSection = product.groupColor && product.groupColor.length > 0 ? `<div class="product-group-color">
                ${product.groupColor.map(color => 
                    `<span class="group-circle-color">
                        <span style="background-color:${color[0]}">${color[0]}</span>
                        <span style="background-color:${color[1]}">${color[1]}</span>
                        <span style="background-color:${color[2]}">${color[2]}</span>
                        <span style="background-color:${color[3]}">${color[3]}</span>
                    </span>`
                ).join('')}
               </div>`:'';
        
        li.innerHTML = `
            <a href="#">
                <figure class="product-img">
                    <img src="./resource/bestseller/${product.thmb}" alt="${product.name}">
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
                    ${colorGroupSection}
                    <p class="price">₩${product.price.toLocaleString()}</p>
                </div>
            </a>
        `;
        
        productList.appendChild(li);
    });

   


})