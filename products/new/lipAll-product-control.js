document.addEventListener("DOMContentLoaded",()=>{

    let paramId = 4

    const productContainer = document.querySelector(".product_detail")
    productContainer.innerHTML = `
        <div class="detail_img">
                <figure>
                    <img src="/resource/detail/new/new1/new1.jpg" alt="">
                </figure>
                <figure>
                    <img src="/resource/detail/new/new1/new1(2).jpg" alt="">
                </figure>
                <figure></figure>
                    <img src="/resource/detail/new/new1/new1(3).jpg" alt="">
                </figure>
                <figure>
                    <img src="/resource/detail/new/new1/new1(4).jpg" alt="">
                </figure>
            </div>
            <div class="detail_desc">
                <div class="product_title">
                    <h1>${newProArray[paramId].name}</h1>
                    <p>PURE COLOR</p>
                    <p>￦ 54,000</p>
                </div>
                <p>색상</p>
                <div class="slider-track">
                    <section class="color">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </section>
                </div>
                <div class="select-color">
                    <!-- <ul class="option">
                        <li><span></span>390 멜티드 멜론</li>
                        <li><span></span>890 멜티드 탠저린</li>
                        <li><span></span>128 멜티드 블러쉬</li>
                        <li><span></span>156 멜티드 로즈</li>
                        <li><span></span>513 멜티드 모브</li>
                        <li><span></span>655 멜티드 가넷</li>
                        <li><span></span>185 멜티드 메이플</li>
                    </ul> -->
                    <form action="/submit" method="POST">
                    <!-- 실제 전송될 값 (숨김) -->
                    <input type="hidden" name="category" id="categoryValue" required>
                    
                    <!-- 커스텀 셀렉트 -->
                    <div class="custom-select">
                        <div class="select-display" id="selectDisplay">
                        카테고리 선택
                        </div>
                        <ul class="select-options" id="selectOptions">
                            <li data-value="design">
                                <span class="icon"></span>
                                <span class="text">390 멜티드 멜론</span>
                            </li>
                            <li data-value="dev">
                                <span class="icon"></span>
                                <span class="text">890 멜티드 탠저린</span>
                            </li>
                            <li data-value="marketing">
                                <span class="icon"></span>
                                <span class="text">128 멜티드 블러쉬</span>
                            </li><li data-value="marketing">
                                <span class="icon"></span>
                                <span class="text">156 멜티드 로즈</span>
                            </li><li data-value="marketing">
                                <span class="icon"></span>
                                <span class="text">513 멜티드 모브</span>
                            </li><li data-value="marketing">
                                <span class="icon"></span>
                                <span class="text">655 멜티드 가넷</span>
                            </li><li data-value="marketing">
                                <span class="icon"></span>
                                <span class="text">185 멜티드 메이플</span>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- <button type="submit">제출</button> -->
                    </form>

                </div>
                <div class="btn_shop">
                    <a href="#" class="pay">결제</a>
                    <a href="#" class="cart">장바구니</a>
                </div>
                <div class="product_info"> <!--padding-bottom을 주고 기준영역 설정해서 view_more 앱솔루트해서 배치-->
                    <h4>입술에 닿는 순간 부드럽게 녹아드는 텍스처의 반짝이는 플럼핑 효과로 시선을 사로잡는 NEW 멜트-온 글로스틱</h4>
                    <ol>
                        <li>
                            <div class="ol_title">1. 거울처럼 반짝이는 샤인 피니쉬</div>
                            <div>: 41% 스킨 컨디셔닝 오일 블렌딩 성분이 함유되어 거울처럼 반짝이는 광택 효과</div>
                            <div>: 거울처럼 맑고 투명한 하이 샤인 피니쉬를 연출하며 자연스럽게 빛나는 입술을 완성</div>
                        </li>
                        <li>
                            <div class="ol_title">2. 멜팅 텍스처</div>
                            <div>: 입술에 닿는 순간 부드럽게 녹아드는 텍스처로 끈적임 없이 편안한 밀착감 제공</div>
                        </li>
                        <li>
                            <div class="ol_title">3. 수분 플럼핑 효과</div>
                            <div>: 에몰리언트 펩타이드 블렌드(Emolient Peptide Blend)의 컨디셔닝 효과와 촉촉한 보습으로 볼륨감 있는 수분 플럼핑 효과 연출</div>
                        </li>
                        <li>
                            <div class="ol_title">4. 본연의 톤에 맞는 트렌드 컬러</div>
                            <div>: 트렌디한 컬러 구성으로 자연스러운 입술 톤을 살려 가장 아름다운 본연의 입술 발색 선사</div>
                        </li>
                    </ol>
                    <span class="view_more">더보기</span>
                </div>
                <div class="ingre">
                    <ul class="ingre-list">
                        <li>
                            <div class="ingre-drop">성분
                                <span class="drop-btn">
                                    <img src="/resource/svg/ic_outline-plus.svg" alt="성분 더보기">
                                </span>
                            </div>
                            <div class="drop-desc">
                                <p>
                                    비스-다이글리세릴폴리아실아디페이트-2,폴리글리세릴-2트라이아이소스테아레이트,다이아이소스테아릴말레이트,비스-베헤닐/아이소스테아릴/피토스체릴다이머다이리놀레일다이머다이리놀리에이트 ,카프릴릭/카프릭트라이글리세라이드,마이크로크리스탈린왁스,합성왁스,스테아랄코늄헥토라이트,에틸헥실팔미테이트,파라핀,트라이베헤닌,팔미토일트라이펩타이드-1,솔비탄아이소스테아레이트,프로필렌카보네이트,에틸렌/프로필렌코폴리머,향료,페녹시에탄올,[+/- 티타늄디옥사이드,적색산화철,황색산화철,흑색산화철,적색201호,적색202호,청색1호 레이크,적색104호의(1) 레이크,황색4호 레이크,황색5호 레이크] 제공된 성분은 동일 제품이라도 경우에 따라 변경될 수 있습니다. 최신정보는 제품 포장의 성분을 참고하시거나 본사 고객관리지원팀으로 연락 부탁 드립니다. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="ingre-popup">후기
                                <span class="popup-btn">
                                    <img src="/resource/svg/mingcute_down-fill.svg" alt="후기 더보기">
                                </span>
                            </div>
                        </li>
                        <li>
                            <div class="ingre-drop">사용방법
                                <span class="drop-btn">
                                    <img src="/resource/svg/ic_outline-plus.svg" alt="사용방법 더보기">
                                </span>
                            </div>
                            <div class="drop-desc">
                                <p>
                                    적당량이 나올 수 있도록 클릭해 직접 입술에 부드럽게 발라줍니다.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="ingre-drop">사용시 주의사항
                                <span class="drop-btn">
                                    <img src="/resource/svg/ic_outline-plus.svg" alt="사용방법 더보기">
                                </span>
                            </div>
                            <div class="drop-desc">
                                <p>
                                    1) 화장품을 사용하여 다음과 같은 이상이 있는 경우에는 사용을 중지하여야 하며, 계속 사용하면 증상이 악화되므로 피부과 전문의 등에게 상담할 것<br>
                                    가) 사용 중 붉은 반점, 부어오름, 가려움증, 자극 등의 이상이 있는 경우<br>
                                    나) 적용 부위가 직사광선에 의하여 위와 같은 이상이 있는 경우<br>
                                    <br>
                                    2) 상처가 있는 부위, 습진 및 피부염 등의 이상이 있는 부위에는 사용을 하지 말 것<br>
                                    <br>
                                    3) 보관 및 취급 시의 주의사항<br>
                                    가) 사용 후에는 반드시 마개를 닫아둘 것<br>
                                    나) 유아ㆍ소아의 손이 닿지 않는 곳에 보관할 것<br>
                                    다) 고온 또는 저온의 장소 및 직사광선이 닿는 곳에는 보관하지 말 것
                                </p>
                            </div>
                        </li>



                    </ul>
                </div>

            </div>
    
    `


})