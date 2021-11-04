const submitbtn = document.getElementById('submitbtn');


const getInfo = (event) => {
    event.preventDefault();
    alert('kd')
}



submitbtn.addEventListener('click', getInfo);





let Date = new Date()

console.log(Date.getday()) 
 var weekDays = new Array(7);
 weekDays[0] = "Monday";
 weekDays[1] = "Tuesday";
 weekDays[2] = "Wednesday";
 weekDays[3] = "Thursday";
 weekDays[4] = "Friday";
 weekDays[5] = "Saturday";
 weekDays[6] = "Sunday";