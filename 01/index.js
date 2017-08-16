window.addEventListener('keydown', function(event){
	const keyElement = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	const audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	// Shortcut for saying, if audio is empty (declared but still undefined)
	if(!audioElement){
		return;
	}
	audioElement.currentTime = 0
	audioElement.play()
	keyElement.classList.add('playing')

})

window.addEventListener('keyup', function(event){
	const keyElement = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	keyElement.classList.remove('playing')

})