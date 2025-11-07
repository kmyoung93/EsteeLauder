document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "repair_1.jpg",
            name: "퍼펙셔니스트 프로 래피드 펌+리프트 트리트먼트 세럼 50ml",
            ename: "Perfectionist Pro",
            price: 232000
        },
        {
            code: 2,
            thmb: "repair_2.jpg",
            name: "퍼펙셔니스트 프로 래피드 브라이트닝 트리트먼트 퍼멘트3 + 비타민 C",
            ename: "Perfectionist Pro",
            price: 232000
        },
        {
            code: 3,
            thmb: "repair_3.jpg",
            name: "어드밴스드 나이트 리페어 레스큐 솔루션",
            ename: "Advanced Night Repair",
            price: 150000
        },
        {
            code: 4,
            thmb: "repair_4.jpg",
            name: "어드밴스드 나이트 리페어 갈색병 아이 젤 크림15ml + 어드밴스드 나이트 리페어 싱크로나이즈드 멀티 리커버리 컴플렉스 30ml",
            ename: "Online Exclusive Value Set Save 30% for a Limited Time",
            price: 257000
        },
        {
            code: 5,
            thmb: "repair_5.jpg",
            name: "어드밴스드 나이트 리페어 아이 리프트+ 스컬프팅 세럼",
            ename: "Advanced Night Repair",
            price: 158000
        },
        {
            code: 6,
            thmb: "repair_6.jpg",
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
            <a href="/detail_page/repair-serum_detail.html?cid=${product.code}">
                <figure class="product-img">
                    <img src="../resource/skincare/repair-serum/${product.thmb}" alt="${product.name}">
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