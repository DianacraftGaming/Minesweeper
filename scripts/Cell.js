const FlagStatus = {FLAG: 'FLAG' , WEAK_FLAG: 'WEAK_FLAG', NONE: 'NONE', OPENED: 'OPENED'}

class Cell{
    #xCoordinate;
    #yCoordinate;
    #hasMine = false;
    #flagStatus = FlagStatus.NONE;
    #minesAround = 0;
    
    constructor(x, y){
        this.#xCoordinate = x;
        this.#yCoordinate = y;
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
    }

    getFlagStatus() {
        return this.#flagStatus;
    }

    setFlag(flagStatus) {
        this.#flagStatus = flagStatus;
    }

    getMinesAround() {
        return this.#minesAround;
    }
}