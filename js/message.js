
export const gameWon = (word) => {
    document.querySelector('#toasts').innerHTML = `
          <div id='toast' class="won">
               Great work! The word is indeed ${word}!
          </div>
      `;
    document.querySelector('input').value = '';
    document.querySelector('input').setAttribute('disabled', true);
  };
  
  export const addTile = (ch, color) => {
    document.querySelector('#tiles').innerHTML += `
          <div class="tile ${color}">
                  ${ch.toUpperCase()}
          </div>
      `;
  };
  