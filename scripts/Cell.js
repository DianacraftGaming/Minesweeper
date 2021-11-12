const FlagStatus = {FLAG: 'FLAG' , WEAK_FLAG: 'WEAK_FLAG', NONE: 'NONE', OPENED: 'OPENED'}

class Cell{
    #listener;
    #xCoordinate;
    #yCoordinate;
    #hasMine = false;
    #flagStatus = FlagStatus.NONE;
    #minesAround = 0;
    #visualSquare;
    
    constructor(x, y, listener){
        this.#xCoordinate = x;
        this.#yCoordinate = y;
        this.#listener = listener;
    }

    setMine() {
        this.#hasMine = true;
    }

    isMine() {
        return this.#hasMine;
    }

    getX() {
        return this.#xCoordinate;
    }

    getY() {
        return this.#yCoordinate;
    }

    isOpened() {
        return (this.#flagStatus == FlagStatus.OPENED);
    }

    setOpened(minesAround) {
        this.#flagStatus = FlagStatus.OPENED;
        this.#minesAround = minesAround;
        this.#listener(this);
    }

    getFlagStatus() {
        return this.#flagStatus;
    }

    setFlag(flagStatus) {
        this.#flagStatus = flagStatus;
        this.#listener(this);
    }

    getMinesAround() {
        return this.#minesAround;
    }

    getVisualSquare() {
        return this.#visualSquare;
    }

    setVisualSquare(square) {
        this.#visualSquare = square;
    }
}