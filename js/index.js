import {getWord, isInDictionary} from './words'
import {gameWon} from './message'
const word = getWord();
let totalChances = 6;

console.log(word);

//DOM node //[. for id] and [# for id] those . # known to be selectors
document.querySelector('input').addEventListener('keyup',function(event) {
    if(event.key == 'Enter') {

     console.log('some key was pressed');
     const guess = event.target.value;

       if(guess.length === 5 && totalChances>0 ) {
        //if guess is right
          if( guess === word ) {
            gameWon(word);
            return;
          }


          //if guess is not in the dictonary we will not penalise the user
          if( isInDictionary(guess) ) {
            for( let i=0; i<word.length; i++) {
              if(guess[i]===word[i]) {
                //green tile
                this.addEventListener( guess[i],'green');
              } else if ( word.includes( guess[i] ) ) {
                //orange tile
                this.addEventListener( guess[i],'orange');
              } else {
                //grey tile
                this.addEventListener( guess[i],'grey');
              }
            }

            totalChances--;
          }
          
          document.querySelector( 'input').value='';
        }

        if( totalChances <=0 ){
           gameOver();
           return;
        }
    } 
})