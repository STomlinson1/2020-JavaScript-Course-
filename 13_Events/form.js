const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e) {
	console.log(e);
	//get values of inputs
	console.log('cc', creditCardInput.value);
	console.log('terms', termsCheckbox.checked);
	console.log('veggieSelect', veggieSelect.value);
	//can send form data to db
	//append something to page using form data

	//stop form using the default behavior(reload page/capturing input)
	e.preventDefault();
});

const formData = {};
//refactor of code below to get store formData
for (let input of [ creditCardInput, termsCheckbox, veggieSelect ]) {
	//destructure event object to get target
	input.addEventListener('input', ({ target }) => {
		//further destructure target to get desired inputs
		const { name, type, value, checked } = target;
		//store form data and check the type for checkbox
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}

// creditCardInput.addEventListener('input', (e) => {
// 	console.log('credit card changed!', e);
// 	formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('Veggie', e);
// 	formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
// 	console.log('CHECKED', e);
// 	formData['agreeToTerms'] = e.target.checked;
// });
