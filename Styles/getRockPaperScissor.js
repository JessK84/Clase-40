/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

 const getRockPaperScissor = (elecction) => {
    let number = Math.ceil(Math.random() *3)
    if (number===1){
        elecction= "rock"
    } else if ( number===2 ){
        elecction = "paper"
    } else {
        elecction= "scissor"
    }
    return elecction
}
