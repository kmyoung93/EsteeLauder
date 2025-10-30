document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "face_1.jpg",
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
            thmb: "face_2.jpg",
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
            code: 3,
            thmb: "face_3.jpg",
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
            code: 4,
            thmb: "face_4.jpg",
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
            code: 5,
            thmb: "face_5.jpg",
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
            code: 6,
            thmb: "face_6.jpg",
            color: [
                "#FDCEA1",
                "#FEE6D3",
                "#F4D8BC",
                "#FEDCB6",
                "#ECBFA5",
                "#FFE3BD"
            ],
            name: "더블웨어 매트 파우더 파운데이션",
            ename: "Double Wear",
            price: 91000
        },
        {
            code: 7,
            thmb: "face_7.jpg",
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
            code: 8,
            thmb: "face_8.jpg",
            name: "더블웨어 세컨 스킨 크림 프라이머 SPF20 / PA++",
            ename: "Double Wear",
            price: 87000
        },
        {
            code: 9,
            thmb: "face_9.jpg",
            name: "더블웨어 플로리스 하이드레이팅 프라이머 – 피치",
            ename: "Double Wear",
            price: 78000
        },
        {
            code: 10,
            thmb: "face_10.jpg",
            color: [
                "#D6BAA4",
                "#DABB9C",
                "#D7B89C",
                "#DDC09F"
            ],
            name: "리-뉴트리브 울트라 래디언스 세럼 크림 파운데이션",
            ename: "Re-Nutriv",
            price: 215000
        },
        {
            code: 11,
            thmb: "face_11.jpg",
            color: [
                "#D18D74",
                "#D27F79",
                "#A56365"
            ],
            name: "더 스컬프팅 블러쉬",
            ename: "The Sculpting",
            price: 73000
        },
        {
            code: 12,
            thmb: "face_12.PNG",
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
                img.setAttribute("src", "../../resource/new/like-act.svg");
            } else {
                img.setAttribute("src", "../../resource/new/like.svg");
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
                    <img src="../../resource/makeup/face/all/${product.thmb}" alt="${product.name}">
                </figure>
                <div class="title">
                    <section>
                        <h3>${product.name}</h3>
                        <span class="btn-like-heart">
                            <img src="../../resource/new/like.svg" alt="좋아요">
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