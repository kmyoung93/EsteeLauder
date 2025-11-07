document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "collection_1.jpg",
            name: "울트라 리치 핸드 크림",
            ename: "Luxury Fragrance",
            price: 59000
        },

        {
            code: 2,
            thmb: "collection_2.jpg",
            name: "드림 더스크 100ML 리필",
            ename: "Luxury Fragrance",
            price: 225000
        },
        
        {
            code: 3,
            thmb: "collection_3.jpg",
            name: "뷰티풀 매그놀리아",
            ename: "Beautiful Magnolia",
            price: 148000
        },

        {
            code: 4,
            thmb: "collection_4.jpg",
            name: "인피니트 스카이",
            ename: "Luxury Fragrance",
            price: 138000
        },

        {
            code: 5,
            thmb: "collection_5.jpg",
            name: "텐더 라이트",
            ename: "Luxury Fragrance",
            price: 138000
        },
        {
            code: 6,
            thmb: "collection_6.jpg",
            name: "드림 더스크",
            ename: "Luxury Fragrance",
            price: 282000
        },
        {
            code: 7,
            thmb: "collection_7.jpg",
            name: "래디언트 미라지",
            ename: "Luxury Fragrance",
            price: 138000
        },
        {
            code: 8,
            thmb: "collection_8.jpg",
            name: "뷰티풀 매그놀리아 핸드 크림",
            ename: "Beautiful Magnolia",
            price: 32000
        },
        {
            code: 9,
            thmb: "collection_9.jpg",
            name: "모던 뮤즈 EDP",
            ename: "Modern Muse",
            price: 182000
        },
        {
            code: 10,
            thmb: "collection_10.jpg",
            name: "플레져 오 드 퍼퓸 스프레이 30ml",
            ename: "Estée Lauder Pleasures",
            price: 85000
        },
        {
            code: 11,
            thmb: "collection_11.jpg",
            name: "플레져 바디로션",
            ename: "Estée Lauder Pleasures",
            price: 79000
        },
        {
            code: 12,
            thmb: "collection_12.jpg",
            name: "뷰티풀 퍼퓸드 바디 로션",
            ename: "Beautiful",
            price: 89000
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
            <a href="/detail_page/collectionAll_detail.html?cid=${product.code}">
                <figure class="product-img">
                    <img src="../../resource/perfume/collection/all/${product.thmb}" alt="${product.name}">
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