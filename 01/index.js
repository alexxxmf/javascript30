window.addEventListener('keydown', function(event){
	var element = document.querySelector('.key[data-key=\"' + event.keyCode + '\"]')
	console.log(element);

})