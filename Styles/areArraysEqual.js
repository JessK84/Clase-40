/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */

 const areArraysEqual = (numbersA, numbersB) => {
     let result=true;
     for(let i =0; i < numbersA.length; i++){
        if (numbersA[i]!==numbersB[i]){
            result= false
        } 
     }    
     return result
 }



