const count = document.getElementById("exp");
const btn = document.getElementById("bnt");
const nug = document.getElementById("level");
const purch = document.getElementById("buy");
const boost = document.getElementById("expboost");
const X = document.getElementById("upg");
const cheat = document.getElementById("cheat");
const head = document.getElementById("head");

var boostlvl = 1;
var expboostcost = 10;
var exp = 0;
var canAdd = true;
var level = 1;
var upgradeCost = 5;
var hadCheat = false;

updateStats();

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
  purch.textContent = `buff: ${upgradeCost} XP`;
  if ()
  boost.textContent = `boost: ${expboostcost} XP`
  X.textContent =  `X ${boostlvl}`
}


