const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const winner = document.querySelector('h1');
const flag = '🚩';

document.querySelector('.img1').setAttribute('src', `images/dice${randomNumber1}.png`);
document.querySelector('.img2').setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  winner.innerHTML = `${flag} Player 1 Wins!`;
} else if (randomNumber1 < randomNumber2) {
  winner.innerHTML = `Player 2 Wins! ${flag}`;
} else {
  winner.innerHTML = 'draw!';
}