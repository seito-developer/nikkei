document.getElementById('js-buttton').addEventListener('click', () => {
    const $counter = document.getElementById('js-counter');
    let currentCount = parseInt($counter.textContent);
    $counter.textContent = currentCount + 1;
});