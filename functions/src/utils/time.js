function currentTime() {
	var date = new Date();
	// Return time in UTC !!!
	return `${date.getHours() + 7}:${date.getMinutes()}`;
}

function convertToString(number) {
	return number.toString();
}

export {
	currentTime,
	convertToString,
};
