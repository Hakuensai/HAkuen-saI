document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');

    // フェードインアニメーション
    content.style.opacity = 0;

    setTimeout(() => {
        content.style.transition = 'opacity 2s ease-in-out';
        content.style.opacity = 1;
    }, 500);

    // すぐにフェードアウトするアニメーション
     // テキストが表示されてから2.5秒後にフェードアウト
});
