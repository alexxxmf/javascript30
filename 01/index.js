window.addEventListener('keypress', function(event){
	/* 
	KEYBOARD

	97 is 'a'

	*/
	if (event.keyCode == 97){
		console.log(event);
		// We can selec the element given a certain attribute
		var element = document.querySelector('[data-key="97"]')
		// Let's add a class with certain styling when event is triggered
		element.classList.add('highlight')
	}
});