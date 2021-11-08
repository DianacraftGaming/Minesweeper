let gameArray;

function onMouseClick(square){
    let coordinates = square.id.split("_");
    let x = parseInt(coordinates[1]);
    let y = parseInt(coordinates[2]);
    if(gameArray[x][y].isMine()){
        square.classList.add('mine')
    } else {
	    square.classList.add('open')
    }
}

function onMouseDblClick(square){
	square.classList.remove('open')
}

function createGameField(field){
    field.innerHTML = "";
    let cellWidth = field.clientWidth / sizeX - 4; //TODO: count the '4' via cell/square
	let cellHeight = field.clientHeight / sizeY - 4;
	for(let i = 0; i<sizeX; i++){
		for(let j = 0; j<sizeY; j++){
			const square = document.createElement('div');
    		square.classList.add('cell');
            square.id = `cell_${i}_${j}`;

	    	square.style.width = `${cellWidth}px`;
    		square.style.height = `${cellHeight}px`;

			square.addEventListener('click', () => onMouseClick(square))
			square.addEventListener('dblclick', () => onMouseDblClick(square))

    		field.append(square)
		}
	}
}

function restartGame(field){
    createGameField(field)
    gameArray = initArrayViaFunction(sizeX, sizeY, ((x, y) => new Cell(x, y)));
    setMines()
}

function setMines(){
    let minesSet = 0;
        while(minesSet < minesCount)
        {
            let tmpX = getRandomNumber(0, sizeX-1);
            let tmpY = getRandomNumber(0, sizeY-1);
            if (!gameArray[tmpX][tmpY].isMine()){
                gameArray[tmpX][tmpY].setMine();
                minesSet++;
            }
        }
}

