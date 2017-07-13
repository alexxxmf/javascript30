window.addEventListener('keydown', function(event){
	var keyElement = document.querySelector('.key[data-key=\"' + event.keyCode + '\"]');
	var audioClipElement = document.querySelector('audio[data-key=\"' + event.keyCode + '\"]');
	audioClipElement.play()

})