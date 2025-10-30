document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "makeup_1.jpg",
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
            code: 2,
            thmb: "makeup_2.jpg",
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
            code: 3,
            thmb: "makeup_3.jpg",
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
            code: 4,
            thmb: "makeup_4.jpg",
            groupColor: [
                [
                    "#916B60",
                    "#805042",
                    "#E0C7A8",
                    "#4E3A34"
                ],
                [
                    "#AC7578",
                    "#C27F9F",
                    "#E3BFBB",
                    "#933A58"
                ],
                [
                    "#A0635C",
                    "#B197A1",
                    "#E7BBAA",
                    "#6E4948"
                ],
                [
                    "#92534B",
                    "#B2807B",
                    "#EDC9B8",
                    "#765C5B"
                ],
            ],
            name: "더 에센셜 아이섀도우",
            ename: "The Essential",
            price: 88000
        },

        {
            code: 5,
            thmb: "makeup_5.jpg",
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
            code: 6,
            thmb: "makeup_6.jpg",
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
            code: 7,
            thmb: "makeup_7.jpg",
            color: [
                "#000000"
            ],
            name: "더블 웨어 제로-스머지 렝쓰닝 마스카라",
            ename: "Double Wear",
            price: 50000
        },

        {
            code: 8,
            thmb: "makeup_8.jpg",
            color: [
                "#000000"
            ],
            name: "리틀 블랙 아이 라이너",
            ename: "Double Wear",
            price: 52000
        },

        {
            code: 9,
            thmb: "makeup_9.jpg",
            color: [
                "#F37786",
                "#F4795B",
                "#E77366",
                "#E66C73",
                "#BB4F5E",
                "#D4353C",
                "#BF5044"
            ],
            name: "퓨어 컬러 멜트-온 글로스틱",
            ename: "Pure Color",
            price: 55000
        },

        {
            code: 10,
            thmb: "makeup_10.jpg",
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
            code: 11,
            thmb: "makeup_11.jpg",
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
            code: 12,
            thmb: "makeup_12.jpg",
            color: [
                "#B85D6B",
                "#944349",
                "#B15C51",
                "#BF464F",
                "#942C1F",
                "#A81E23",
                "#B01E53",
                "#984D49",
                "#B1635A"   
            ],
            name: "퓨어 컬러 익스플리시트 실크 매트 립스틱",
            ename: "Pure Color",
            price: 56000
        },

        {
            code: 13,
            thmb: "makeup_13.jpg",
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
            code: 14,
            thmb: "makeup_14.jpg",
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
            code: 15,
            thmb: "makeup_15.jpg",
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
            code: 16,
            thmb: "makeup_16.jpg",
            name: "더블웨어 세컨 스킨 크림 프라이머 SPF20 / PA++",
            ename: "Double Wear",
            price: 87000
        },

        {
            code: 17,
            thmb: "makeup_17.jpg",
            name: "더블웨어 플로리스 하이드레이팅 프라이머 – 피치",
            ename: "Double Wear",
            price: 78000
        },

        {
            code: 18,
            thmb: "makeup_18.jpg",
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
            code: 19,
            thmb: "makeup_19.png",
            name: "펜슬 샤프너",
            ename: "Pencil Sharpener",
            price: 13000
        },

        {
            code: 20,
            thmb: "makeup_20.png",
            name: "브로우 퍼펙트 3D 스타일러",
            ename: "Brow Perfect",
            price: 45000
        },

        {
            code: 21,
            thmb: "makeup_21.PNG",
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
            code: 22,
            thmb: "makeup_22.png",
             color: [
                "#310A05",
                "#782326",
                "#AD3F40",
                "#9A2A50",
                "#7C241A",
                "#873B3F",
                "#AF5756",
                "#87000E",
            ],
            name: "퓨어 컬러 휩 매트 립 컬러",
            ename: "Pure Color",
            price: 54000
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
            ? `
            <div class="slider-container">
                <div class="product-color slider-track">
                    ${product.color.map(color => 
                        `<span style="background-color: ${color}"></span>`
                    ).join('')}
                </div>
            </div>
               `
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
                    <img src="../resource/makeup/all/${product.thmb}" alt="${product.name}">
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
                    ${colorGroupSection}
                    <p class="price">₩${product.price.toLocaleString()}</p>
                </div>
            </a>
        `;
        
        productList.appendChild(li);
    });

   


})