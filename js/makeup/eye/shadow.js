document.addEventListener("DOMContentLoaded",()=>{
    let products=[
        {
            code: 1,
            thmb: "shadow_1.jpg",
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
                    <img src="../../resource/makeup/eye/shadow/${product.thmb}" alt="${product.name}">
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