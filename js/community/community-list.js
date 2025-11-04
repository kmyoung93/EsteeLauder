document.addEventListener("DOMContentLoaded", () => {
    const postListElement = document.querySelector(".community-list tbody");
    let result = "";
    const totalRows = 10; // 고정 행 개수

    postList.forEach(post => {
        result += `
            <tr>
                <td>${post.no}</td>
                <td class="title_date">
                    <a href="./community-detail.html?no=${post.no}">${post.title}</a>
                    <p class="hidden-date">${post.date}</p>
                </td>
                <td class="date">${post.date}</td>
                <td>${post.view}</td>
            </tr>
        `;
    });

    // 부족한 행 빈 칸으로 채우기
    const emptyRows = totalRows - postList.length;
    for (let i = 0; i < emptyRows; i++) {
        result += `
            <tr class="empty-row">
                <td></td>
                <td class="title_date"></td>
                <td class="date"></td>
                <td></td>
            </tr>
        `;
    }

    postListElement.innerHTML = result;
});