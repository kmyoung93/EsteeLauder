document.addEventListener("DOMContentLoaded", () => {
    // URL에서 게시글 번호 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const postNo = parseInt(urlParams.get('no'));
    
    // 해당 게시글 찾기
    const currentPost = postList.find(post => post.no === postNo);
    
    if (!currentPost) {
        alert("게시글을 찾을 수 없습니다.");
        window.location.href = "./community.html";
        return;
    }
    
    // 이전/다음 게시글 찾기
    const currentIndex = postList.findIndex(post => post.no === postNo);
    const prevPost = postList[currentIndex + 1]; // no가 작은 게시글 (이전)
    const nextPost = postList[currentIndex - 1]; // no가 큰 게시글 (다음)
    
    // HTML 생성
    const postWrap = document.querySelector(".post-wrap");
    
    let result = `
        <div class="post">
            <h3 class="post-title">${currentPost.title}</h3>
            <div class="post-detail">
                <div class="post-no">${currentPost.no}</div>
                <div class="post-date">${currentPost.date}</div>
                <div class="post-view">${currentPost.view}</div>
            </div>
            <div class="post-txt">
                <figure class="post-img">
                    <img src="../resource/community/${currentPost.img[0]}" alt="${currentPost.title}">
                </figure>
                <div class="post-content">${currentPost.content}</div>
            </div>
        </div>
        
        <div class="post-list">
            ${prevPost ? `
            <div class="post-pre">
                <a href="./community-detail.html?no=${prevPost.no}">
                    <div class="post-pre-header">
                        <div class="post-pre-icon"></div>
                        <div class="post-pre-text">이전</div>
                    </div>
                    <div class="post-pre-no">${prevPost.no}</div>
                    <div class="post-pre-title">${prevPost.title}</div>
                    <div class="post-pre-date">${prevPost.date}</div>
                    <div class="post-pre-view">${prevPost.view}</div>
                </a>
            </div>
            ` : `
            <div class="post-pre empty">
                <p>이전 글이 없습니다</p>
            </div>
            `}
            
            ${nextPost ? `
            <div class="post-next">
                <a href="./community-detail.html?no=${nextPost.no}">
                    <div class="post-next-header">
                        <div class="post-next-icon"></div>
                        <div class="post-next-text">다음</div>
                    </div>
                    <div class="post-next-no">${nextPost.no}</div>
                    <div class="post-next-title">${nextPost.title}</div>
                    <div class="post-next-date">${nextPost.date}</div>
                    <div class="post-next-view">${nextPost.view}</div>
                </a>
            </div>
            ` : `
            <div class="post-next empty">
                <p>다음 글이 없습니다</p>
            </div>
            `}
        </div>
    `;
    
    postWrap.innerHTML = result;
});