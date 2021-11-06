let currentTab;
let tabName1 = "<img src=\"images/rules.png\" class=\"btnImg\">"
let tabName2 = "<img src=\"images/game.png\" class=\"btnImg\">"
let tabName3 = "<img src=\"images/settings.png\" class=\"btnImg\">"
let sizeX = 11;
let sizeY = 11;



function onMouseClick(square){
	square.classList.add('open')
}

function onMouseDblClick(square){
	square.classList.remove('open')
}

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
	let cellWidth = field.clientWidth / sizeX - 4; //TODO: count the '4' via cell/square
	let cellHeight = field.clientHeight / sizeY - 4;
	for(let i = 0; i<sizeX; i++){
		for(let i = 0; i<sizeX; i++){
			const square = document.createElement('div');
    		square.classList.add('cell');

	    	square.style.width = `${cellWidth}px`;
    		square.style.height = `${cellHeight}px`;

			square.addEventListener('click', () => onMouseClick(square))
			square.addEventListener('dblclick', () => onMouseDblClick(square))

    		field.append(square)
		}
	}
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

function show_tab(num) {
	changeActivity(currentTab, false);
	changeActivity(num, true);
	currentTab = num;
}