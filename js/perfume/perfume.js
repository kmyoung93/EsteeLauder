document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "perfume_1.jpg",
            name: "메디터래니언 허니써클 EDP",
            ename: "AERIN Mediterranean Honeysuckle",
            price: 248000
        },

        {
            code: 2,
            thmb: "perfume_2.jpg",
            name: "로즈 드 그라스 퍼퓸",
            ename: "AERIN Rose De Grasse",
            price: 317000
        },
        
        {
            code: 3,
            thmb: "perfume_3.jpg",
            name: "이캣 자스민 EDP",
            ename: "AERIN Ikat Jasmine",
            price: 181000
        },

        {
            code: 4,
            thmb: "perfume_4.jpg",
            name: "앰버 머스크 EDP",
            ename: "AERIN Amber Musk",
            price: 181000
        },

        {
            code: 5,
            thmb: "perfume_5.jpg",
            name: "울트라 리치 핸드 크림",
            ename: "Luxury Fragrance",
            price: 59000
        },

        {
            code: 6,
            thmb: "perfume_6.jpg",
            name: "드림 더스크 100ML 리필",
            ename: "Luxury Fragrance",
            price: 225000
        },

        {
            code: 7,
            thmb: "perfume_7.jpg",
            name: "뷰티풀 매그놀리아",
            ename: "Beautiful Magnolia",
            price: 148000
        },

        {
            code: 8,
            thmb: "perfume_8.jpg",
            name: "인피니트 스카이",
            ename: "Luxury Fragrance",
            price: 138000
        },

        {
            code: 9,
            thmb: "perfume_9.jpg",
            name: "텐더 라이트",
            ename: "Luxury Fragrance",
            price: 138000
        },

        {
            code: 10,
            thmb: "perfume_10.jpg",
            name: "드림 더스크",
            ename: "Luxury Fragrance",
            price: 282000
        },

        {
            code: 11,
            thmb: "perfume_11.jpg",
            name: "래디언트 미라지",
            ename: "Luxury Fragrance",
            price: 138000
        },

        {
            code: 12,
            thmb: "perfume_12.jpg",
            name: "뷰티풀 매그놀리아 핸드 크림",
            ename: "Beautiful Magnolia",
            price: 32000
        },

        {
            code: 13,
            thmb: "perfume_13.jpg",
            name: "모던 뮤즈 EDP",
            ename: "Modern Muse",
            price: 182000
        },

        {
            code: 14,
            thmb: "perfume_14.jpg",
            name: "플레져 오 드 퍼퓸 스프레이 30ml",
            ename: "Estée Lauder Pleasures",
            price: 85000
        },

        {
            code: 15,
            thmb: "perfume_15.jpg",
            name: "앰버 머스크 트래블 스프레이",
            ename: "AERIN Amber Musk",
            price: 49000
        },

        {
            code: 16,
            thmb: "perfume_16.jpg",
            name: "플레져 바디로션",
            ename: "Estée Lauder Pleasures",
            price: 79000
        },

        {
            code: 17,
            thmb: "perfume_17.jpg",
            name: "라일락 패스 바디크림",
            ename: "AERIN Lilac Path",
            price: 91000
        },

        {
            code: 18,
            thmb: "perfume_18.jpg",
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
            <a href="/detail_page/perfumeAll_detail.html?cid=${product.code}">
                <figure class="product-img">
                    <img src="../resource/perfume/all/${product.thmb}" alt="${product.name}">
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