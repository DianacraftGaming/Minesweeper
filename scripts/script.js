let currentTab = 2;
let tabName1 = "<img src=\"images/rules.png\" class=\"btnImg\">"
let tabName2 = "<img src=\"images/game.png\" class=\"btnImg\">"
let tabName3 = "<img src=\"images/settings.png\" class=\"btnImg\">"
let sizeX = 10;
let sizeY = 10;


let field = document.getElementById('game');
let cellWidth = field.clientWidth / sizeX - 4;
let cellHeight = field.clientHeight / sizeY - 4;
for(let i = 0; i<sizeX; i++){
	for(let i = 0; i<sizeX; i++){
		const square = document.createElement('div');
    	square.classList.add('cell');

    	/*square.style.width = `${cellWidth}px`;
    	square.style.height = `${cellHeight}px`;*/

    	//square.addEventListener('mouseover', () => setColor(square))
    	//square.addEventListener('mouseleave', () => removeColor(square))


    	field.append(square)
	}
}


function setting(){
	let wrapper = document.getElementById('wrap');

	window.battom1 = document.getElementById('bat_1');
	window.battom2 = document.getElementById('bat_2');
	window.battom3 = document.getElementById('bat_3');

	battom1.innerHTML = tabName1;
	battom2.innerHTML = tabName2;
	battom3.innerHTML = tabName3;

	window.taba1 = document.getElementById('tab_1');
	window.taba2 = document.getElementById('tab_2');
	window.taba3 = document.getElementById('tab_3');

	let newWidth = battom1.clientWidth + battom2.clientWidth + battom3.clientWidth;
	newWidth += 6;
	
	wrapper.style.width = newWidth + 'px';
	taba1.style.width = newWidth + 'px';
	taba2.style.width = newWidth + 'px';
	taba3.style.width = newWidth + 'px';
}

function show_tab(num) {
	if(num == 1 && num != currentTab){
		taba1.style.display = 'block';
		battom1.style.border = '3px solid #8a7254';

		battom2.style.border = '3px outset #DEB887';
		battom3.style.border = '3px outset #DEB887';

		taba2.style.display = 'none';
		taba3.style.display = 'none';
		currentTab = num;
	}

	if(num == 2 && num != currentTab){
		taba2.style.display = 'block';
		battom2.style.border = '3px solid #8a7254';

		battom1.style.border = '3px outset #DEB887';
		battom3.style.border = '3px outset #DEB887';

		taba1.style.display = 'none';
		taba3.style.display = 'none';
		currentTab = num;
	}

	if(num == 3 && num != currentTab){
		taba3.style.display = 'block';
		battom3.style.border = '3px solid #8a7254';

		battom2.style.border = '3px outset #DEB887';
		battom1.style.border = '3px outset #DEB887';

		taba2.style.display = 'none';
		taba1.style.display = 'none';
		currentTab = num;
	}
}