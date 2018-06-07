const today2 = document.getElementById('day');
const todayMin = document.getElementById('minutes');
const todayHour = document.getElementById('hours');
const study = document.getElementById('study');
const today = new Date();
const h = today.getHours();
const m = today.getMinutes();
const s = today.getSeconds();
const clock = getElementById('time');

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


today.textContent = `Today is ${day} `;
m = checkTime(m);
s = checkTime(s);

const checkTime = (i) => {
    if (i < 10) {i = '0' + i};
        return i;
}


if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
    if (h < 12 && m  < 59) {
        study.textContent = "Sir, Classes start at 13:00 pm. Try no to be late."
    } else {
        study.textContent = "...";
    }
} else if (day === "Friday") {
    if (h < 11 && m < 59) {
    study.textContent = "Sir, Classes start at 12:00 pm. Try no to be late."
    } else {
    study.textContent = "...";
    }
} else {
    study.textContent = "Sir, there are no classes today."
}

clock.innerHTML = `${h}:${m}:${s}`;
