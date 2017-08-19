var inputs = document.querySelectorAll('.controls input')
inputs.forEach(function(input){
	input.addEventListener(
		'change',
		function(event){
			// if sizing property is not in sizing go for empty string
			var suffix = input.dataset.sizing || ""
			// the object that calls the function is the one stored in this
			// we are listening to change in input object to trigger this so this = input
			document.documentElement.style.setProperty("--" + this.name, this.value + suffix)
		})
})

