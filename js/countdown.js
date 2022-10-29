(function () {

    const countdownContainer = document.querySelector('.countdown');
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');




    function countdown () {
        const deadLineDate = new Date(`December 01 2022 00:00:00`);
        const currentTime = new Date();
        const diff = deadLineDate - currentTime;

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        days.innerText = d < 10 ? '0' + d : d;
        hours.innerText = h < 10 ? '0' + h : h;
        minutes.innerText = m < 10 ? '0' + m : m;
        seconds.innerText = s < 10 ? '0' + s : s;
    };

    countdown();
    setInterval(countdown, 1000);

})();