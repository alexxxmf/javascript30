const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
	if (video.paused){
		video.play();
	} else {
		video.pause();
	}
}

function updateButton(){
	if (video.paused) {
		toggle.textContent = '►'
	} else {
		toggle.textContent = '| |'
	}
}

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
	video[this.name] = this.value;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(function(skipButton){
	skipButton.addEventListener('click', skip);
})

ranges.forEach(function(range){
	range.addEventListener('change', handleRangeUpdate)
})