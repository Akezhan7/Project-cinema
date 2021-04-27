function timer (id, deadLine) {
    // const deadLine = '2021-03-29';

    function getTime (endtime) {
    const t = Date.parse (endtime) - new Date (),
            days = Math.floor (t / (1000 * 60 * 60 * 24)),
            hours = Math.floor ((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor ((t / 1000 / 60) % 60),
            seconds = Math.floor ((t / 1000) % 60);
        
    return {
        'total':t,
        'd':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };

    }
    function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
    }

    function setTime (selector, endtime) {
    const time = document.querySelector (selector),
            days = document.querySelector ('#days'),
            hours = document.querySelector ('#hours'),
            minutes = document.querySelector ('#minutes'),
            seconds = document.querySelector ('#seconds'),
            timeInterval = setInterval (updatetime, 1000);
            updatetime ();
            
    function updatetime () {
        const t = getTime (endtime);

        days.innerHTML = getZero (t.d);
        minutes.innerHTML = getZero (t.minutes);
        hours.innerHTML = getZero (t.hours);
        seconds.innerHTML = getZero (t.seconds);

        if (t.total <= 0) {
        clearInterval (timeInterval);
        }
    }
    }
    setTime (id, deadLine);
}

export default timer;