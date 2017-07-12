window.addEventListener('keydown', function(event){
	console.log(event.keyCode);
	console.log(document.querySelector('key[data-key=\"' + event.keyCode + '\"]'))

})