const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const text = input.value;
	input.value='';
	const li = document.createElement('li');
	li.textContent = text;
	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	li.appendChild(label);
	label.appendChild(checkBox);
	ul.appendChild(li);
});

ul.addEventListener('change', (event) => {
	console.log(event.target.checked);
});

