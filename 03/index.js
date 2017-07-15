var inputs = document.querySelectorAll('.controls input')
inputs.forEach(function(input){
	input.addEventListener('change', function(event){console.log(event)})
})

