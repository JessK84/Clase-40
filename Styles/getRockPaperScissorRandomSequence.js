/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */


 const getRockPaperScissorRandomSequence = (length) => {
    const words=["piedra", "papel", "tijera"]
    let elecction = [];
    for (let i = 0; i < length; i++){
      let indiceRandom =Math.round(Math.random() * (words.length-1))
      let newWord=words[indiceRandom]
      elecction.push(newWord);
    }
    return elecction;
 }

 


