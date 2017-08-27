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

function handleProgress(){
	const video_progress = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${video_progress}%`;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(function(skipButton){
	skipButton.addEventListener('click', skip);
})

ranges.forEach(function(range){
	range.addEventListener('change', handleRangeUpdate)
})
