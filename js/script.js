

function setInput(x) {
	let condomsQuantity = document.querySelector('.condom-set${x}');

	//Actions on input
	condomsQuantity.addEventListener('click', condomsCount);
	function condomsCount() {
	//Condoms quantity input. Element creation.
		//click action
		let quantity = document.createElement(`input`); //Области видимости. Сделай quantity видимой для строки№ 31
		quantity.className = '.condoms-input';
		quantity.setAttribute('type', 'number')
		quantity.setAttribute('placeholder', '0')
		quantity.className = ('condoms-input');
		if (condomsQuantity.childNodes.length >= 1) {}
			else {
		condomsQuantity.appendChild(quantity);
		}
	}
		//mouseout action
	condomsQuantity.addEventListener('mouseout', condomsCountZero);
	function condomsCountZero() {
		let searchQuantity = document.querySelector('.condoms-input');
			if (searchQuantity.value === '0') {
				searchQuantity.remove();
			}
	}
}


//ПРоверка на ввод числа а не текста!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//<script>
//input.onblur = function() {
//  if (isNaN(this.value)) { // введено не число
//    // показать ошибку
//    this.className = "error";
//    error.innerHTML = 'Вы ввели не число. Исправьте, пожалуйста.'
//  }
//};
//
//input.onfocus = function() {
//  if (this.className == 'error') { // сбросить состояние "ошибка", если оно есть
//    this.className = "";
//    error.innerHTML = "";
//  }
//};
//</script>
