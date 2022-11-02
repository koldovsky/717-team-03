(function () {

    const countdownContainer = document.querySelector('.countdown');
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    function countdown () {
        const deadLineDate = new Date(`December 01 2022 00:00:00`);
        const currentTime = new Date();
        const diff = deadLineDate - currentTime;

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        days.innerHTML = d < 10 ? '0' + d : d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;
    };

    countdown();
    setInterval(countdown, 1000);

})();