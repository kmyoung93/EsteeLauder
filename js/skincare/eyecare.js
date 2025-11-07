document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "eyecare_1.png",
            name: "리-뉴트리브 에이지 리버설 아이크림",
            ename: "Ultimate Diamond",
            price: 250000
        },
        {
            code: 2,
            thmb: "eyecare_2.png",
            name: "리-뉴트리브 다이아몬드 에너지 아이 크림",
            ename: "Perfectionist Pro",
            price: 192000
        },
        {
            code: 3,
            thmb: "eyecare_3.png",
            name: "어드밴스드 나이트 리페어 갈색병 아이 젤 크림15ml + 어드밴스드 나이트 리페어 싱크로나이즈드 멀티 리커버리 컴플렉스 30ml",
            ename: "Online Exclusive Value Set Save 30% for a Limited Time",
            price: 257000
        },
        {
            code: 4,
            thmb: "eyecare_4.png",
            name: "어드밴스드 나이트 리페어 아이 리프트+ 스컬프팅 세럼",
            ename: "Advanced Night Repair",
            price: 158000
        },
        {
            code: 5,
            thmb: "eyecare_5.png", 
            name: "리-뉴트리브 얼티미트 다이아몬드 트랜스포머티브 아이 세럼",
            ename: "Re-Nutriv",
            price: 305000
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
            <a href="/detail_page/eyecare_detail.html?cid=${product.code}">
                <figure class="product-img">
                    <img src="../resource/skincare/eyecare/${product.thmb}" alt="${product.name}">
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