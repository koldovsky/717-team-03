(function () {

    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    function countDown () {
        const deadLineDate = new Date(`Desember 01 2022 00:00:00`);
        const currentTime = new Date();
        const diff = deadLineDate - currentTime;

        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        days.innerText = deys < 10 ? '0' + deys : deys;
        hours.innerText = hours < 10 ? '0' + hours : hours;
        minutes.innerText = minutes < 10 ? '0' + minutes : minutes;
        seconds.innerText = seconds < 10 ? '0' + seconds : seconds;
    };

   
    countDown();
    setInterval(countDown, 1000);


})();