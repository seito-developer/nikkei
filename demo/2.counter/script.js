const $counter = document.getElementById('js-counter');

document.getElementById('js-buttton').addEventListener('click', () => {
    let currentCount = parseInt($counter.textContent);
    $counter.textContent = currentCount + 1;
});