let counterDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(()=> {
    let now = new Date().getTime()
    let distance = counterDate - now;
    //days
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.querySelector('.days').innerHTML = days
    // hours
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector('.hours').innerHTML = hours;
    //minute
    let min = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
    document.querySelector('.min').innerHTML = min < 10 ? `0${min}`: min;
    //seconde
    let sec = Math.floor((distance % (1000 * 60) / (1000)));
    document.querySelector('.sec').innerHTML = sec < 10  ? `0${sec}` : sec;
    if(distance < 0 ){
        clearInterval(counter);
        document.querySelector('.days').innerHTML = "00";
        document.querySelector('.hours').innerHTML = "00";
        document.querySelector('.min').innerHTML = "00";
        document.querySelector('.sec').innerHTML = "00";
    }
}, 1000);

