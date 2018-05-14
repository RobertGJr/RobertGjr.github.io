var today = document.getElementById('day');
var todayMin = document.getElementById('minutes');
var todayHour = document.getElementById('hours');

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
today.textContent = "today is" + day;
todayHour.textContent = hour.getHours() + ":";
todayMin.textContent = min.getMinutes();
