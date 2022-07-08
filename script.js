const countDown = () =>{
    const countDate = new Date('Dec 31, 2022').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the fuck does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate the shit
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').textContent = textDay;
    document.querySelector('.hour').textContent = textHour;
    document.querySelector('.minute').textContent = textMinute;
    document.querySelector('.second').textContent = textSecond;

}
setInterval(countDown, 1000);