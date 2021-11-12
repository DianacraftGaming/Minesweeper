/*TODO:
let score
function setScore(score)
*/

const GameStatus = {RUNNING: 'RUNNING' , WIN: 'WIN', LOSE: 'LOSE'}
let gameStatus;
let gameArray;
let flagsOnField;

function restartGame(field){
    gameStatus = GameStatus.RUNNING;
    gameArray = initArrayViaFunction(sizeX, sizeY, ((x, y) => new Cell(x, y, ((cell) => updateCell(cell)))));
    createGameField(field)
    setMines()
}

function createGameField(field){
    flagsOnField = 0;
    field.innerHTML = "";
    field.oncontextmenu = (() => {return false;});
    let cellWidth = field.clientWidth / sizeX - 4; //TODO: count the '4' via cell/square
	let cellHeight = field.clientHeight / sizeY - 4;
	for(let i = 0; i<sizeX; i++){
		for(let j = 0; j<sizeY; j++){
			const square = document.createElement('div');
    		square.classList.add('cell');
            square.id = `cell_${i}_${j}`;

	    	square.style.width = `${cellWidth}px`;
    		square.style.height = `${cellHeight}px`;

			square.addEventListener('click', () => onMouseClick(square));
			//square.addEventListener('dblclick', () => onMouseDblClick(square));
            square.addEventListener('contextmenu', () => onContextMenu(square));

    		field.append(square);
            gameArray[i][j].setVisualSquare(square);
		}
	}
}

function getCell(square){
    let coordinates = square.id.split("_");
    let x = parseInt(coordinates[1]);
    let y = parseInt(coordinates[2]);
    return gameArray[x][y];
}

function onContextMenu(square){
    let cell = getCell(square);

        if(cell.isOpened())
            return false;

        switch (cell.getFlagStatus()) {
            case FlagStatus.NONE:
                if(flagsOnField<minesCount) {
                    cell.setFlag(FlagStatus.FLAG);
                    flagsOnField++;
                } else {
                    cell.setFlag(FlagStatus.WEAK_FLAG);
                } break;
            case FlagStatus.FLAG:
                cell.setFlag(FlagStatus.WEAK_FLAG);
                flagsOnField--;
                break;
            case FlagStatus.WEAK_FLAG:
                cell.setFlag(FlagStatus.NONE);
                break;
        }
        
    return false;
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

function onMouseClick(square){
    let cell = getCell(square);

    openCell(cell)

}

function openCell(cell){
    if (cell.getFlagStatus() == FlagStatus.FLAG)
        return;

    if(cell.isMine()){
        gameStatus = GameStatus.LOSE;
        cell.setFlag(FlagStatus.OPENED);
        showMines();
        //showMessageDialog(Color.NONE, "You lost.", Color.BLACK, 50);
    }

    else if(cell.isOpened()){
        let a = cell.getMinesAround();
        let b = checkFlags(cell);

        if(a == b) {
            getClosedNeighbours(cell).forEach(neighbor => openCell(neighbor));
        }
    }

    else {
        a = checkMines(cell);
        //score++;
        //setScore(goal - score);
        if(a>0) {
            cell.setOpened(a);
        }
        else {
            cell.setOpened(a);
            getClosedNeighbours(cell).forEach(neighbor => openCell(neighbor));
        }
    }
    /*if(score == goal)
    {
        gameStatus = GameStatus.WIN;
        showMessageDialog(Color.NONE, "You won!", Color.BLACK, 50);
    }*/
}

function showMines(){
    for (let i = 0; i < sizeX; i++) {
        for (let j = 0; j < sizeY; j++) {
            let cell = gameArray[i][j];
            if(cell.isMine()) {
                updateCell(cell);
            }
        }
    }
}

function checkMines(cell){
    let minesAround = 0;
    getClosedNeighbours(cell).forEach(neighbor => {if(neighbor.isMine()){minesAround++}});
    return minesAround;
}

function getClosedNeighbours(cell){
    let x = cell.getX();
    let y = cell.getY();

    let list = new Array();
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let tmpX = x+i;
            let tmpY = y+j;

            if(tmpX>=0 && tmpX<sizeX && tmpY>=0 && tmpY<sizeY && (tmpX != x || tmpY != y) && !gameArray[tmpX][tmpY].isOpened()) {
                list.push(gameArray[tmpX][tmpY]);
            }
        }
    }
    return list;
}

function onMouseDblClick(square){
	//square.classList.remove('open')
}

function updateCell(cell){
    let square = cell.getVisualSquare();
    
    if(cell.isMine() && cell.isOpened()) {
        square.classList.add('mine')
    } else if(cell.isMine() && gameStatus == GameStatus.LOSE){
        square.classList.add('closed_mine')
    } else {
        switch (cell.getFlagStatus()) {
            case FlagStatus.OPENED:
                let a = cell.getMinesAround();
                square.innerHTML = (a == 0) ? "" : a;
                square.classList.add('open')
                break;
            case FlagStatus.FLAG:
                square.innerHTML = 'F';
                break;
            case FlagStatus.WEAK_FLAG:
                square.innerHTML = '?';
                break;
            case FlagStatus.NONE:
                square.innerHTML = '';
        }
    }
}

function checkFlags(cell){
    let flagsAround = 0;
    getClosedNeighbours(cell).forEach(neighbor => {if(neighbor.getFlagStatus() == FlagStatus.FLAG){flagsAround++}});
    return flagsAround;
}

