/**
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números 
 * iniciales o no
 *
 * @param {number} a 
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 * 
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 */

//  const getRange = (numberA, numberB) => {
//     let range =[];  
//             if(numberA<=numberB){
//                 range =1;
//                 for (let i = numberA; i <= range.length; i++) {
//                     numberA++
//                     ta

//             }
            
//              // numberA=number
         
        
//     }

  
//     return range

//  }

 const getRange = (numberA, numberB, inclusive = true) => {
    let range = [];
    if (inclusive) {
        range.push(numberA);
        for (let i = numberA; i < numberB; i++) {
            range.push(i + 1);
        }
    }
    return range;
}