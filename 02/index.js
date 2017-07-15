/*

setTimeOut and setInterval may behave in a similar way but
there are some important internal stuff highlighted here

https://johnresig.com/blog/how-javascript-timers-work/

https://stackoverflow.com/questions/729921/settimeout-or-setinterval

*/

function setDate(){
	var date = new Date
	console.log(date)

	var second = date.getSeconds()
	var secondDegrees = ((second/60) * 360) + 90
	var secondHand = document.querySelector('.secondHand')
	secondHand.style.transform = "rotate(" + secondDegrees + "deg)"

	var minute = date.getMinutes()
	var minuteDegrees = ((minute/60) * 360) + 90
	var minuteHand = document.querySelector('.minuteHand')
	minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"

	var hour = date.getHours()
	var hourDegrees = ((hour/24) * 360) + 90
	var hourHand = document.querySelector('.hourHand')
	hourHand.style.transform = "rotate(" + hourDegrees + "deg)"

}

setInterval(setDate, 1000)