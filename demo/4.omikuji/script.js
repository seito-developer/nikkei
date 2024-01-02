(() => {
    const DURATION = 3000;
    const SLOT_TIME = 100;
    const omikujiArray = [
        './images/omikuji-7.png',
        './images/omikuji-6.png',
        './images/omikuji-5.png',
        './images/omikuji-4.png',
        './images/omikuji-3.png',
        './images/omikuji-2.png',
        './images/omikuji-1.png'
    ];
    const $result = document.getElementById('js-result');

    const getRandomNumber = (argMin, argMax) => {
        const min = Math.ceil(argMin);
        const max = Math.floor(argMax);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const playOmikuji = () => {
        const slotAnimationTimer = setInterval(() => {
            const randomKey = getRandomNumber(0,6);
            $result.setAttribute("src", omikujiArray[randomKey]);
        }, SLOT_TIME);

        setTimeout(() => {
            clearInterval(slotAnimationTimer);
            const randomKey = getRandomNumber(0,6);
            $result.setAttribute("src", omikujiArray[randomKey]);
        }, DURATION);
    };

    document.getElementById('js-button').addEventListener('click', playOmikuji);
})();