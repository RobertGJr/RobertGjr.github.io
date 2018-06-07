const today2 = document.getElementById('day');
const study = document.getElementById('study');
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


today2.textContent = `Today is ${day} `;
const tictac = () => {
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
const clock = document.getElementById('time');

clock.innerHTML = h + ':' + m + ':' + s;

const t = setTimeout(tictac, 500);

}


