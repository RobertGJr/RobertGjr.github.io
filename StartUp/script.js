var today = document.getElementById('day');
var todayMin = document.getElementById('minutes');
var todayHour = document.getElementById('hours');
var study = document.getElementById('study');

var hour = new Date();
var min = new Date();
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}


today.textContent = "Today is" + " " + day;
todayHour.textContent = hour.getHours() + ":";


if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
    if (hour < 12 && min  < 59) {
        study.textContent = "Sir, Classes start at 13:00 pm. Try no to be late."
    } else {
        study.textContent = "...";
    }
} else if (day === "Friday") {
    if (hour < 11 && min < 59) {
    study.textContent = "Sir, Classes start at 12:00 pm. Try no to be late."
    } else {
    study.textContent = "...";
    }
} else {
    study.textContent = "Sir, there are no classes today."
}
    

 todayMin.textContent = min.getMinutes();
