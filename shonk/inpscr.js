//exp counter
const count = document.getElementById("exp");

//pat the shonk button
const btn = document.getElementById("bnt");

//level counter
const nug = document.getElementById("level");

//level +1 upgrade button
const purch = document.getElementById("buy");

//exp x2 boost button
const boost = document.getElementById("expboost");

//exp boost counter
const X = document.getElementById("upg");

//add exp cheat button
const cheat = document.getElementById("cheat");

//header
const head = document.getElementById("head");


//exp boost stuff
var boostlvl = 1;
var expboostcost = 10;

//exp button stuff
var exp = 0;
var canAdd = true;

//level upgrade stuff
var level = 1;
var upgradeCost = 5;

//check if cheats have been used
var hadCheat = false;


//check for the user to see if they used cheats
head.onclick = function() {
  	console.log(hadCheat);
};

//pet shonk
btn.onclick = function() {
  
  	if (canAdd === true) {

    	canAdd = false;
    	exp += 1 * boostlvl;
    	updateStats();

    	setTimeout(function() {
      		canAdd = true;
    	}, 1);

  	};
};

//upgrade level
purch.onclick = function() {

  	if (exp >= upgradeCost) {

    	exp -= upgradeCost;
    	upgradeCost += 5;
    	level += 1;
    	updateStats();

  	};
};

//purchace exp upgrade
boost.onclick = function() {
  
  	//caps at a x5 boost
  	if (exp >= expboostcost && boostlvl < 5) {

    	exp -= expboostcost;
    	boostlvl += 1;
    	expboostcost *= 2;
    	updateStats();

  	};
};

//cheat button
let cheatAmount = 0
cheat.onclick = function() {

  	hadCheat = true;
  	cheatAmount = window.prompt("HOW MUCH");
  	cheatAmount = parseInt(cheatAmount);
	exp = cheatAmount;
  	updateStats();

};

//sets all the text on buttons and stuff to the right values
function updateStats() {
    count.textContent = `${exp} XP`;
    nug.textContent = `Lvl: ${level}`;
    purch.textContent = `+1 lvl: ${upgradeCost} XP`;
    if (boostlvl < 5) {
		boost.textContent = `boost: ${expboostcost} XP`;
    } else {
		boost.textContent = `Max`;
	};
    
	X.textContent = `X ${boostlvl}`;
};