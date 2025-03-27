setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    hourRotation = 30 * hours + minutes / 2;
    minuteRotation = 6 * minutes + seconds / 10;
    secondRotation = 6 * seconds;
    
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform= `rotate(${secondRotation}deg)`;

}, 1000);