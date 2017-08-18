// let condomsModel = ['condom1', 'condom2','condom3','condom4','condom5','condom6'];
// let clickCreateInput = [0,0,0,0,0,0];
//let condoms = [
//	{model: 'condom1', count: 0},
//	{model: 'condom2', count: 0},
//	{model: 'condom3', count: 0},
//	{model: 'condom4', count: 0},
//	{model: 'condom5', count: 0},
//	{model: 'condom6', count: 0}
//]
(function() {
	let condomsElems = null;
	let condoms = null;

	init();

	function init() {
		condomsElems = getCondomElements();
		condoms = createCondoms();

		initEventListeners();
	}

	function initEventListeners() {
		const condomsContainerElem = document.getElementById('condomsContainer');
		condomsContainerElem.addEventListener('mouseover', mouseOverHadler);
		condomsContainerElem.addEventListener('click', clickHandler);
		condomsContainerElem.addEventListener('click', inputsQuantityCheck);	//input appear action
		condomsContainerElem.addEventListener('mouseout', inputDisappear);	//input disappear action
	}

	function inputDisappear(event) {
				let target = event.target;
				if (target.value === '0' || target.value === '') {
							setTimeout(function() {target.remove()}, 1500);
							} else {};
		}

	function clickCreateInput() {
		const quantity = document.createElement(`input`);
		quantity.className = '.condoms-input';
		quantity.setAttribute('type', 'number');
		quantity.setAttribute('placeholder', '0');
		quantity.className = ('condoms-input');
		return quantity;
	}

	function inputsQuantityCheck(event) {
		const condomsQuantity = event.target.closest('.condom-set');
		if (condomsQuantity === null) return;
		if (condomsQuantity.childNodes.length >= 1) {}
			else {
			condomsQuantity.appendChild(clickCreateInput());
		}
	}

	function mouseOverHadler(event) {
		const condomElem = event.target.closest('.condom-set');
		if (condomElem === null) return;
	}

	function clickHandler(event) {
		const condomElem = event.target.closest('.condom-set');
		if (condomElem === null) return;
	}

	function getCondomElements() {
		return document.querySelectorAll('[data-condom-model]');
	}

	function createCondoms() {
		const condoms = [];
		for (i=0; i < condomsElems.length; i++) {
			const condomModel = condomsElems[i].dataset.condomModel;
			condoms.push({model: condomModel, count: 0});
		};
		return condoms;
	}
})()


//1nipRFWVuOkJ3v-qaHqaVxbRGAhz_4XIPPaXGGZ0JmGA
