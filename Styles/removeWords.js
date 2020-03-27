/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test"), ["really", "bad"]) 
 */

 const removeWords = (text) =>{
    text = text.split(" ");
    let words = text.indexOf("bad");
    let newWords = text.indexOf("really");
    text.splice(words, 1);
    text.splice(newWords, 1);   
    text=text.join(" ")

    return text // returns "This is a test"
}

