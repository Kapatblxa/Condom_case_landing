
//Internal
let order = new order {
	adress = "";
	condoms = [];
	condomsQuantity = [];
}

let condomsQuantity = document.querySelector('.condom-set');

let quantity = document.createElement(`input`);
quantity.className = '.condoms-input';
quantity.setAttribute('type', 'number')
quantity.setAttribute('placeholder', '0')

condomsQuantity.addEventListener('mousedown', condomsCount);

//Добавить еще один addEvent с функцией focus в созданный input
quantity.className = ('condoms-input');

function condomsCount() {
	condomsQuantity.textContent = 0;
	condomsQuantity.appendChild(quantity);
}
condomsQuantity.addEventListener('mousedown', condomsFocus);
//condomsQuantity.addEventListener('focus', condomsCount);
console.dir(condomsQuantity);

//must be return
//input must be placed in <form>

//External





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
