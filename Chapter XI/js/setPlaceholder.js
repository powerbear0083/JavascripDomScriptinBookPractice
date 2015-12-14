function setPlacehoder() {
	if(!Modernizr.input.placeholder){
		var input = document.getElementById('first-name');

		input.onfocus = function(){
			var text = this.placeholder || this.getAttribute('placeholder');
			if(this.value == text){
				this.value = '';
			}
		}

		input.onblur = function (){
			if(this.value == ''){
				this.placeholder || this.getAttribute('placeholder');
			}
		}

		input.onblur();
	}
}
setPlacehoder();