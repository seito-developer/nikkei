const playOmikuji = () => {
    const DURATION = 2000;
    const SLOT_TIME = 100;
    const omikuji = {
        '大吉': './images/omikuji-7.png',
        '中吉': './images/omikuji-6.png',
        '小吉': './images/omikuji-5.png',
        '吉': './images/omikuji-4.png',
        '末吉': './images/omikuji-3.png',
        '凶': './images/omikuji-2.png',
        '大凶': './images/omikuji-1.png'
    };
    const keys = Object.keys(omikuji);
    const $result = document.getElementById('result');

    const slotAnimationTimer = setInterval(() => {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        $result.setAttribute("src", omikuji[randomKey]);
    }, SLOT_TIME);

    setTimeout(() => {
        clearInterval(slotAnimationTimer);
        $result.setAttribute("src", omikuji[keys[Math.floor(Math.random() * keys.length)]]);
    }, DURATION);
};

document.getElementById('drawButton').addEventListener('click', playOmikuji);