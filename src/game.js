export default class Game {
    constructor(boardElement) {
      this.boardElement = boardElement;
      this.boardSize = 4;
      this.cells = [];
      this.activeCell = null;
    }
  
    init() {
      this.createBoard();
      this.moveGoblin();
      setInterval(() => this.moveGoblin(), 1000);
    }
  
    createBoard() {
      for (let i = 0; i < this.boardSize * this.boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.boardElement.appendChild(cell);
        this.cells.push(cell);
      }
    }
  
    moveGoblin() {
      if (this.activeCell) {
        this.activeCell.innerHTML = '';
      }
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.cells.length);
      } while (this.cells[newIndex] === this.activeCell);
      this.activeCell = this.cells[newIndex];
  
      const goblinImg = document.createElement('img');
      goblinImg.src = './goblin.png';
      goblinImg.classList.add('goblin');
      this.activeCell.appendChild(goblinImg);
    }
  }
  