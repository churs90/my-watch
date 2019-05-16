var minute = document.getElementsByClassName('minute')[0];
var secund = document.getElementsByClassName('secund')[0];
var hour = document.getElementsByClassName('hour')[0];
var show = document.getElementsByClassName('show')[0];
var date = new Date();
var hourclock = date.getHours();
var secundclock = date.getSeconds();
var minclock = date.getMinutes();
secund.style.transform = 'rotate(' + secundclock*6 + 'deg)';
minute.style.transform = 'rotate(' + minclock*6 + 'deg)';
hour.style.transform = 'rotate(' + (hourclock*30 + minclock/2) + 'deg)';

function one() {
    secundclock++;
    if (secundclock == 60) {
        minclock++;
        secundclock = 0;
    }
    if (minclock == 60) {
        hourclock++;
        minclock = 0;
    }
    if (hourclock > 23) {
        hourclock = 0;
        minclock = 0;
        secundclock = 0;
    }
    show.innerHTML = 'текущее время ' + hourclock + ' часов ' + minclock + ' минут ' + secundclock + ' секунд';
    minute.style.transform = 'rotate(' + minclock*6 + 'deg)';
    secund.style.transform = 'rotate(' + secundclock*6 + 'deg)';
    hour.style.transform = 'rotate(' + (hourclock*30 + minclock/2) + 'deg)';
}

    setInterval(one,1000);


