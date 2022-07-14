const countdown = () => {
    //Set the time when the event will be
    const countData = new Date("August 28, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countData - now;

    //The formula for our time
    const second = 1000;
    const minute = second * 60;
    const hour = minute *60;
    const day = hour *24;

    //Calculate the time of the present
    const finalDay = Math.floor(gap / day);
    const finalHour = Math.floor((gap % day) / hour);
    const finalMinute = Math.floor((gap % hour) / minute);
    const finalSecond = Math.floor((gap % minute) / second);

    //Send to html for our php page
    document.querySelector(".day").innerText = finalDay;
    document.querySelector(".hour").innerText = finalHour;
    document.querySelector(".minute").innerText = finalMinute;
    document.querySelector(".second").innerText = finalSecond;

    //if(gap < 1000){
    //lauchTheBullshit(); - ceva unde să redicționeze
    //}
};

setInterval(countdown, 1000);

//for dark mode form test
let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');

  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
};


