const count = document.getElementById("COUNT");
const btn = document.getElementById("bnt");
const nug = document.getElementById("nug");
var num = 0;
var canAdd = true;
var hun = 100;

btn.onclick = function() {
  
  if (canAdd === true) {
    canAdd = false;
    num += 1;
    count.textContent = num;
    
    setTimeout(function() {
      canAdd = true;
    }, 1000);
    
  };
};
