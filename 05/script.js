var panels = document.querySelectorAll('.panel');

panels.forEach(function(panel){
	panel.addEventListener('click', function(e){
		panel.classList.toggle('open');
	})
	panel.addEventListener('transitioned', function(e){
		if (e.propertyName.includes('flex')){
			panel.classList.toggle('open-active');
		}
	})
})