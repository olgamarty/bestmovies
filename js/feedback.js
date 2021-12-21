'use strict';

const feedbackButton = document.querySelector('.feedback__button');
const feedbackName = document.getElementById('feedback-name');
const textAuthorEmpty = document.getElementById('author-empty');
const feedbackEmail = document.getElementById('feedback-email');
const textEmailEmpty = document.getElementById('email-empty');
const textEmailInvalid = document.getElementById('email-validation');
const feedbackTheme = document.getElementById('feedback-theme');
const textThemeEmpty = document.getElementById('theme-empty');
const feedbackText = document.getElementById('feedback-text');
const textTextareaEmpty = document.getElementById('text-empty');

function addErrorValues(input, text) {
	input.classList.add('input_border_error');
	text.classList.remove('feedback__validation-text_invisible');
}

function removeErrorValues(text, input) {
	input.classList.remove('input_border_error');
	text.classList.add('feedback__validation-text_invisible');
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

feedbackName.addEventListener('click', () => {
	removeErrorValues(textAuthorEmpty, feedbackName);
})

feedbackEmail.addEventListener('click', () => {
	removeErrorValues(textEmailEmpty, feedbackEmail);
	textEmailInvalid.classList.add('feedback__validation-text_invisible');
});

feedbackTheme.addEventListener('click', () => {
	removeErrorValues(textThemeEmpty, feedbackTheme);
});

feedbackText.addEventListener('click', () => {
	removeErrorValues(textTextareaEmpty, feedbackText);
});


feedbackButton.addEventListener('click', (event) => {
	event.preventDefault();

	let error = 0;

	if (feedbackName.value === '') {
		addErrorValues(feedbackName, textAuthorEmpty);
		error++
	}

	if (feedbackEmail.value === '') {
		addErrorValues(feedbackEmail, textEmailEmpty);
		error++
	}
	else if (!validateEmail(feedbackEmail.value)) {
		addErrorValues(feedbackEmail, textEmailInvalid);
		error++
	}

	if (feedbackTheme.value === '') {
		addErrorValues(feedbackTheme, textThemeEmpty);
		error++
	}

	if (feedbackText.value === '') {
		addErrorValues(feedbackText, textTextareaEmpty);
		error++
	}

	if (error < 1) {
		let userDate = {};
		userDate.author = feedbackName.value;
		userDate.email = feedbackEmail.value;
		userDate.theme = feedbackTheme.value;
		userDate.text = feedbackText.value;
		console.log(userDate);
		feedbackName.value = '';
		feedbackEmail.value = '';
		feedbackTheme.value = '';
		feedbackText.value = '';
	}

})
