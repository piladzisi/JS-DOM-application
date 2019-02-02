const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text){

	const li = document.createElement('li');
	li.textContent = text;
	const label = document.createElement('label');
	label.textContent = 'Confirmed';

	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	li.appendChild(label);
	label.appendChild(checkBox);

	const button = document.createElement('button');
	button.textContent = 'remove';
	li.appendChild(button);
	return li;
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const text = input.value;
	input.value='';
	const li = createLI(text);
	ul.appendChild(li);
});


ul.addEventListener('change', (event) => {
	const checkbox = event.target;
	const checked = checkbox.checked;
	const listItem = checkbox.parentNode.parentNode;

	if (checked){
		listItem.className = 'responded';

	} else {
		listItem.className = '';
	}
});

ul.addEventListener('click', (event) =>{
	if (event.target.tagName ==='BUTTON'){
		const li = event.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	};
});

