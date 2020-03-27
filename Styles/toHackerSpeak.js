/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} word 
 * @returns {String} - El wordo convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

const toHackerSpeak = (word) => {
    word = word.replace(/a/gi, "4");
    word = word.replace(/e/gi, "3");
    word = word.replace(/i/gi, "1");
    word = word.replace(/o/gi, "0");
    word = word.replace(/s/gi, "5");
    return word
}

