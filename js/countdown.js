(function getTimer() {
    /*const countdown = document.querySelector('.time');
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const loading = document.getElementById('loading');

    const countdownTime = new Date().getFullTime();
    const dealOfTheMonth = new Date(`Desember 01 ${countdownTime + 1} 00:00:00`);
    month.innerText = countdownTime + 1;
    //Update countdown time
    function updateCountdown() {
        const currentTime = new Date();
        const diff = dealOfTheMonth - currentTime;

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;
        //DOM
        days.innerHTML = d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;
    }

    //spinner
    setTimeout(() => {
        loading.remove();
        countdown.style.display = 'flex';
    }, 1000);
    // Run every second
    setInterval(updateCountdown, 1000);*/

   let date_new = "December 21,2022 18:00:00";
    
    let date_t = new Date(date_new);
    let date = new Date();
let timer = date_t - date;

})