console.log('person.js is running')

const isAdult = (age) => age > 17 

const canDrink = (age) => age > 18 

const isSenior = (age) => age > 54 

//export default isSenior

export  { isAdult, canDrink, isSenior as default }

