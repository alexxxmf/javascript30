var inputs = document.querySelectorAll('.controls input')
inputs.forEach(function(input){
	input.addEventListener(
		'change',
		function(event){
			console.log(input.value)
			//if sizing property is not in sizing go for empty string
			var suffix = input.dataset.sizing || ""
			
		})
})

