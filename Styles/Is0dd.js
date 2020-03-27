/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

const IsOdd = (x) => {
    if (x %2 !==0){
        return true
    } else {
        return false
    }
}

// versión simplificada 
const IsOdd = x => x % 2 !== 0 ? true : false


//Versión más simplificada
const IsOdd = x => x % 2 !== 0