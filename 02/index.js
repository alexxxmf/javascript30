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
	var minute = date.getMinutes()
	var hour = date.getHours()
	
}

setInterval(setDate, 1000)