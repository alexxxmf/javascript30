window.addEventListener('keydown', function(event){
	var keyElement = document.querySelector('.key[data-key=\"' + event.keyCode + '\"]');
	var audioElement = document.querySelector('audio[data-key=\"' + event.keyCode + '\"]');
	// Shortcut for saying, if audio is empty (declared but still undefined)
	if(!audioElement){
		return;
	}
	audioElement.currentTime = 0
	audioElement.play()
	keyElement.classList.add('pushed')

})