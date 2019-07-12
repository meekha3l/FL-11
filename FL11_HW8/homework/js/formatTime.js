function formatTime (num) {
    let hours = (num / 60);
    let rHours = Math.floor(hours);
    let minutes = (hours - rHours) * 60;
    let rMinutes = Math.round(minutes);
    let days = (rHours / 24);
    let rDays = Math.floor(days);
    hours = (days - rDays) * 24;
    rHours = Math.round(hours);
    return `${rDays} day(s) ${rHours} hour(s) ${rMinutes} minute(s)`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));