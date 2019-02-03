document.addEventListener('DOMContentLoaded', () =>{

	const form = document.getElementById('registrar');
	const input = form.querySelector('input');
	const mainDiv = document.querySelector('.main');
	const ul = document.getElementById('invitedList');
	const otherDiv = document.createElement('div');
	const filterLabel = document.createElement('label');
	const filterCheckBox = document.createElement('input');

	filterLabel.textContent = "Hide those who haven't responded";
	filterCheckBox.type = 'checkbox';
	otherDiv.appendChild(filterLabel);
	otherDiv.appendChild(filterCheckBox);
	mainDiv.insertBefore(otherDiv, ul);

	filterCheckBox.addEventListener('change', (event) =>{
		const isChecked = event.target.checked;
		const lis = ul.children;
		if (isChecked){
			for (let i = 0; i<lis.length; i+=1) {
				let li = lis[i];
				if (li.className === 'responded') {
					li.style.display = ''; //will pick up previous style
				} else{
					li.style.display = 'none';
				}
			}
		} else{
			for (let i = 0; i<lis.length; i+=1) {
				let li = lis[i];
				li.style.display = '';
			}

		}
	})

	function createLI(text){

		const li = document.createElement('li');
		const span = document.createElement('span');
		span.textContent = text;
		li.appendChild(span);

		const label = document.createElement('label');
		label.textContent = 'Confirmed';

		const checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		li.appendChild(label);
		label.appendChild(checkBox);

		const editButton = document.createElement('button');
		editButton.textContent = 'edit';	
		li.appendChild(editButton);

		const removeButton = document.createElement('button');
		removeButton.textContent = 'remove';	
		li.appendChild(removeButton);
		

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

	ul.addEventListener('click', (event) => {
		if (event.target.tagName ==='BUTTON'){
			const button = event.target;
			const li = event.target.parentNode;
			const ul = li.parentNode;
			if (button.textContent === 'remove'){
				ul.removeChild(li);
			} else if (button.textContent === 'edit') {
				const span = li.firstElementChild;
				const input = document.createElement ('input');
				input.type = 'text';
				input.value = span.textContent;
				li.insertBefore(input, span);
				li.removeChild(span);
				button.textContent = 'save';			
			} else if (button.textContent === 'save') {
				const input = li.firstElementChild;
				const span= document.createElement ('span');
				span.textContent = input.value ;
				li.insertBefore(span, input);
				li.removeChild(input);
				button.textContent = 'edit';
			}
		}
	});
});

