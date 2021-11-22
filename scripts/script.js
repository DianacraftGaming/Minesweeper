let currentTab;
let tabName1 = "<img src=\"images/rules.png\" class=\"btnImg\">"
let tabName2 = "<img src=\"images/game.png\" class=\"btnImg\">"
let tabName3 = "<img src=\"images/settings.png\" class=\"btnImg\">"
let sizeX = 10;
let sizeY = 10;
let minesCount = 25;
let newSizeX = 10;
let newSizeY = 10;
let newMinesCount = 25;

function setting(){
	currentTab = 2;
	show_tab(currentTab);

	window.battom1 = document.getElementById('bat_1');
	window.battom2 = document.getElementById('bat_2');
	window.battom3 = document.getElementById('bat_3');

	battom1.addEventListener('click', () => show_tab(1));
	battom2.addEventListener('click', () => show_tab(2));
	battom3.addEventListener('click', () => show_tab(3));


	battom1.innerHTML = tabName1;
	battom2.innerHTML = tabName2;
	battom3.innerHTML = tabName3;

	let field = document.getElementById('field');
	startGame(field);
}

function changeHeight(){
	newSizeX = parseInt(document.querySelector('#heightInput').value);
}

function changeWidth(){
	newSizeY = parseInt(document.querySelector('#widthInput').value);
}

function changeMines(){
	newMinesCount = parseInt(document.querySelector('#minesInput').value);
}

function changeActivity(num, state){
	let button = document.getElementById('bat_'+num);
	let tab = document.getElementById('tab_'+num);

	if(state){
		button.classList.add('active');
		tab.classList.add('active');
	} else {
		button.classList.remove('active');
		tab.classList.remove('active');
	}
}

function applyChanges(){
	sizeX = newSizeX;
	sizeY = newSizeY;
	minesCount = newMinesCount;
	show_tab(2);
	startGame(field)
}

function show_tab(num) {
	changeActivity(currentTab, false);
	changeActivity(num, true);
	currentTab = num;
}

function showScore(score){
    
}

