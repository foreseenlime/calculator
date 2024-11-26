const count = document.getElementById("COUNT");
const btn = document.getElementById("bnt");
const nug = document.getElementById("nug");
const purch = document.getElementById("buy")


var num = 0;
var canAdd = true;
var hun = 100;
var upgradeCost = 1;

updateStats();

//pet shonk
btn.onclick = function() {
  
  if (canAdd === true) {
    canAdd = false;
    num += 1;
    updateStats();
    
    setTimeout(function() {
      canAdd = true;
    }, 1);
    
  };
};

purch.onclick = function() {
  if (num >= upgradeCost) {
    num -= upgradeCost;
    upgradeCost *= 2;
    updateStats();
  };
};

function updateStats() {
  count.textContent = `${num} XP`;
  nug.textContent = hun;
  purch.textContent = upgradeCost;
}


