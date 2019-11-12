export const isAdult = (age => age >= 18 ? 'true' : 'false');

export const canDrink = age => age >= 21;

export default age => age >= 65 ? "senior" : "not senior";