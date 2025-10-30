document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "luxury_1.jpg",
            name: "울트라 리치 핸드 크림",
            ename: "Luxury Fragrance",
            price: 59000
        },

        {
            code: 2,
            thmb: "luxury_2.jpg",
            name: "드림 더스크 100ML 리필",
            ename: "Luxury Fragrance",
            price: 225000
        },

        {
            code: 3,
            thmb: "luxury_4.jpg",
            name: "인피니트 스카이",
            ename: "Luxury Fragrance",
            price: 138000
        },

        {
            code: 4,
            thmb: "luxury_5.jpg",
            name: "텐더 라이트",
            ename: "Luxury Fragrance",
            price: 138000
        },
        {
            code: 5,
            thmb: "luxury_6.jpg",
            name: "드림 더스크",
            ename: "Luxury Fragrance",
            price: 282000
        },
        {
            code: 6,
            thmb: "luxury_7.jpg",
            name: "래디언트 미라지",
            ename: "Luxury Fragrance",
            price: 138000
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
                    <img src="../../resource/perfume/collection/luxury/${product.thmb}" alt="${product.name}">
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