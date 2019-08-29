export const isAdult = (age) => {
	if (age >= 18) {
		return true;
	}
	return false;
}

export const canDrink = (age) => {
	return age >= 21 ? true : false
}

const isSenior = (age) => age > 65;
export { isSenior as default }