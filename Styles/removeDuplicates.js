/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

 const removeDuplicates = (arr) => {
     let result=[]
         for(let i =0; i<arr.length; i++){
             if(result.indexOf(arr[i])===-1){                
                 result.push(arr[i])
             }   
        }
        return result
    }
