(() => {
    const $counter = document.getElementById('js-counter');

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }
    }

    for (let index = 0; index < document.getElementsByClassName('js-buttton').length; index++) {
        document.getElementsByClassName('js-buttton')[index].addEventListener('click', (e) => clickHandler(e))
    }
})();