console.log("This is Wall clock js file");

function updateclock() {

    //get current date
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let Day = currentTime.getDay();
    let Month = currentTime.getMonth();
    let currentDate = currentTime.getDate();
    let currentMonth;
    let currentDay;
    //Choose AM/PM as per the time of day
    let timeOfDay = currentTime < 12 ? "AM" : "PM";

    //pad 0 if minnutes or seconds is less than zero
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    
    //Convert railway clock to AM/PM clock
    currentHours = (currentHours > 12 ? currentHours - 12 : currentHours);
    currentHours = (currentHours == 00 ? 12 : currentHours);
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;

    switch(Month){
        case 0:
            currentMonth = "January";
            break;
        case 1:
            currentMonth = "Febuary";
            break;
        case 2:
            currentMonth = "March";
            break;
        case 3:
            currentMonth = "April";
            break;
        case 4:
            currentMonth = "May";
            break;
        case 5:
            currentMonth = "June";
            break;
        case 6:
            currentMonth = "July";
            break;
        case 7:
            currentMonth = "August";
            break;
        case 8:
            currentMonth = "September";
            break;
        case 9:
            currentMonth = "October";
            break;
        case 10:
            currentMonth = "November";
            break;
        case 11:
            currentMonth = "December";
            break;
    }
    switch(Day){
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thrusday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Saturday";
            break;
        case 0:
            currentDay = "Sunday";
            break;
    }

    //Prepare the time string from hours, minutes and seconds
    let currentTimeStr = `<h1 class="first">${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}</h1>
    <h1 class="second">${currentDay}, ${currentMonth} ${currentDate}</h1>`;
    

    //insert the timestring inside the DOM
    let clock = document.getElementById('clock');
    clock.innerHTML = currentTimeStr;

}