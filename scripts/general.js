function getRandomNumber(min, max) {
    return Math.round(Math.random()*(max - min) + min)
}

function initArrayViaFunction(x, y, func){
    let array = new Array()
    for(let i = 0; i < x; i++){
        array[i] = new Array();
        for(let j = 0; j < y; j++){
            array[i][j] = func(i, j);
        }
    }
    return array;
}

function initArrayViaValue(x, y, defaultValue){
    let array = new Array()
    for(let i = 0; i < x; i++){
        array[i] = new Array();
        for(let j = 0; j < y; j++){
            array[i][j] = defaultValue;
        }
    }
    return array;
}