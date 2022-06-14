var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');
var R1 = document.querySelector('.list__js-result1');
var R2 = document.querySelector('.list__js-result2');
var R3 = document.querySelector('.list__js-result3');
var R4 = document.querySelector('.list__js-result4');
var a = +elInput.value;

function name() {
	elForm.addEventListener('submit', function (e) {
		e.preventDefault();
		R1.textContent = piyoda();
		R2.textContent = velosiped();
		R3.textContent = mashina();
		R4.textContent = samolyot();
	});
}

function piyoda() {
	return Math.round(+elInput.value / 3.6);
}

function velosiped() {
	return Math.round(+elInput.value / 20.1);
}

function mashina() {
	return Math.round(+elInput.value / 70);
}

function samolyot() {
	return Math.round(+elInput.value / 800);
}

name()