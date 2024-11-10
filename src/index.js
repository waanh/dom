import './styles.css';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('game-board');
  const game = new Game(board);
  game.init();
});
