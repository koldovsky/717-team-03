(function () {

    const clockContainer = document.querySelector('.header__upperline-clock');

    function updateTime() {
        clockContainer.innerText = new Date().toLocaleTimeString();
    }

    setInterval(updateTime, 1000);

})();