var inc = 1000;

clock();

function clock(){
    const date = new Date();

    const months = {1: 'JAN', 2: 'FEB', 3: 'MAR', 4: 'APR', 5: 'MAY', 6: 'JUNE', 7: 'JULY', 8: 'AUG', 9: 'SEPT', 10: 'OCT', 11: 'NOV', 12: 'DEC'};
    const week_days = {1: 'SUNDAY', 2: 'MONDAY', 3: 'TUESDAY', 4: 'WEDNESDAY', 5: 'THURSDAY', 6: 'FRIDAY', 7: 'SATURDAY'};


    // For Day, Date, Year and Month
    const year = date.getFullYear();
    const month = months[date.getMonth() + 1];
    const date_num = date.getDate();
    const day = week_days[date.getDay() + 1]; 
    console.log(day);
    console.log(month)

    // For Hour, Minute and Second
    const hours = ((date.getHours() + 11)%12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours*30;
    const minute = minutes*6;
    const second = seconds*6;

    const h = (hours<10) ? "0"+hours : hours;
    const m = (minutes<10) ? "0"+minutes : minutes;

    // Updating hours and minutes values
    document.querySelector(".hours").innerHTML = h;
    document.querySelector(".mins").innerHTML = m;

    // Updating the clock needles
    document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
    document.querySelector(".second").style.transform = `rotate(${second}deg)`;

    // Updating the dates, month, day and year

    document.querySelector(".date_above").innerHTML = `${day} ${date_num}, ${month} ${year}`;
    document.querySelector(".date_below").innerHTML = `${day} ${date_num}, ${month} ${year}`;
}

setInterval(clock, inc);