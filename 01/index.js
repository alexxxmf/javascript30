window.addEventListener('keypress', function(event){
	/* 
	KEYBOARD

	97 is 'a'

	*/
	if (event.keyCode == 97){
		console.log(event);
		var element = document.querySelector('[data-key="97"]')
	}
});