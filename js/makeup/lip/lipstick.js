document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "lip_3.jpg",
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
            code: 2,
            thmb: "lip_4.jpg",
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
            <a href="/detail_page/lipstick_detail.html?cid=${product.code}">
                <figure class="product-img">
                    <img src="../../resource/makeup/lip/all/${product.thmb}" alt="${product.name}">
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