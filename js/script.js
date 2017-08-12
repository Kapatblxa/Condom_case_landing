let timerId;
// let condomsModel = ['condom1', 'condom2','condom3','condom4','condom5','condom6'];
// let condomsCount = [0,0,0,0,0,0];
//let condoms = [
//	{model: 'condom1', count: 0},
//	{model: 'condom2', count: 0},
//	{model: 'condom3', count: 0},
//	{model: 'condom4', count: 0},
//	{model: 'condom5', count: 0},
//	{model: 'condom6', count: 0}
//]
let condoms = [];

const dataCondomModel = document.querySelectorAll('[data-condom-model]');
for (i=0; i < dataCondomModel.length; i++) {
 condoms.push({model: 'condom' + i, count: 0});
}
debugger

let condomSet0 = document.querySelector('.condom-set0');
let condomSet1 = document.querySelector('.condom-set1');
let condomSet2 = document.querySelector('.condom-set2');
let condomSet3 = document.querySelector('.condom-set3');
let condomSet4 = document.querySelector('.condom-set4');
let condomSet5 = document.querySelector('.condom-set5');

condomSet0.addEventListener('mouseover', setInput(0));
condomSet1.addEventListener('mouseover', setInput(1));
condomSet2.addEventListener('mouseover', setInput(2));
condomSet3.addEventListener('mouseover', setInput(3));
condomSet4.addEventListener('mouseover', setInput(4));
condomSet5.addEventListener('mouseover', setInput(5));

function setInput(x) {
	let condomsQuantityArray = document.querySelectorAll('.condom-set');
	let condomsQuantity = condomsQuantityArray[x];
	//Actions on input
	condomsQuantity.addEventListener('click', condomsCount);
	function condomsCount() {
	//Condoms quantity input. Element creation.
		//click action
		let quantity = document.createElement(`input`);
		quantity.className = '.condoms-input';
		quantity.setAttribute('type', 'number')
		quantity.setAttribute('placeholder', '0')
		quantity.className = ('condoms-input');
		if (condomsQuantity.childNodes.length >= 1) {}
			else {
		condomsQuantity.appendChild(quantity);
		}
	}
//		condomsCount[x] = quantity.value;}  //Здесь надо записать введенное значение в массив CondomsCount
	}
		//mouseout action
		let searchInput = document.querySelector('.choice-box');
			searchInput.addEventListener('mouseout', condomsCountZero);
			function condomsCountZero(event) {
				let target = event.target;
				if (target.value === '0' || target.value === '') {
							setTimeout(function() {target.remove()}, 1500);
							} else {}
			}



//let searchInput = document.querySelector('.condoms-input');
//searchInput.addEventListener('mouseout', condomsCountZero);
//function condomsCountZero() {
//					if (condomsQuantity.value === 0) {
//						console.log(searchInput[i]);
//					searchInput[i].remove();
//				}
//}




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
