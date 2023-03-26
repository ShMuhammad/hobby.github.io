const date = new Date();
const todayDate = date.toLocaleDateString();
let displayDate = document.getElementById("date");

displayDate.innerText = todayDate;