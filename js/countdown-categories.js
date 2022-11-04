(function () {
    const countDownDate = new Date("Nov 23, 2022 00:00:00").getTime();
    const contactUsCaption = document.querySelector(".categories-title");
    contactUsCaption.innerText = "NEW ARRIVALS";
  
    function getTime() {
      let currentTime = new Date().getTime();
      let difference = countDownDate - currentTime;
  
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      document.querySelector(".categories-days").innerHTML = days;
      document.querySelector(".categories-hours").innerHTML = hours;
      document.querySelector(".categories-minutes").innerHTML = minutes;
      document.querySelector(".categories-seconds").innerHTML = seconds;
  
      if (difference < 0) {
        clearInterval(x);
        document.querySelector(".days").innerHTML = "00";
        document.querySelector(".hours").innerHTML = "00";
        document.querySelector(".minutes").innerHTML = "00";
        document.querySelector(".seconds").innerHTML = "00";
      }
    }
  
    setInterval(getTime, 1000);
  })();
  