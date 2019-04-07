# memory game

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:


  - The player flips one card over to reveal its underlying symbol.
  - The player then turns over a second card, trying to find the corresponding card with the same symbol.
  - If the cards match, both cards stay flipped over.
  - If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

### project files

the project consist of three main files 
* indexs 
* app.css
* app.js
we will focus on (app.js) file since its contain all the game ruls.


```sh
 cards.forEach(card => card.addEventListener('click', flipCard));
```
this will add the click evend to all cards and invoke the flip card function 
the flipcard function is 
```sh
function flipCard()
```
it will save the value for the first and the secod click 
and count move then send the values to checkForMatch function that will check is the cards are matched or not 

```sh
function checkForMatch()
```
this function recive the first and second click values and check if they match 
then keep them fliped and remove the click event if not then flip them back.
once all the cards are matches then show winner window and reset all the values.
