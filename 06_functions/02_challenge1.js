function isValidPassword(password, username) {
	if (password.length >= 8 && !password.includes(' ') && !password.includes(username)) {
		return true;
	} else {
		return false;
	}
}

console.log(isValidPassword('89Fjj1nms', 'dogLuvr'));
console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));
console.log(isValidPassword('dog23423423', 'dog'));
