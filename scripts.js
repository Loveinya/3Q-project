const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (!usernameInput.value && !passwordInput.value) {
		alert('Please enter your username and password.');
		console.log('Login error.');
	} else if (!usernameInput.value) {
		alert('Please enter your username.');
		console.log('Login error.');
	} else if (!passwordInput.value) {
		alert('Please enter your password.');
		console.log('Login error.');
	} else {
		// submit the form
	}
});