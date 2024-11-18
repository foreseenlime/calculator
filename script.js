const head = document.getElementById("myhead");
const parg = document.getElementById("myp");
const butt = document.getElementById("mybut");
const butt1 = document.getElementById("mybut1");
const butt2 = document.getElementById("mybut2");
const butt3 = document.getElementById("mybut3");
const butt4 = document.getElementById("mybut4");
const butt5 = document.getElementById("mybut5");

butt.addEventListener("click", click);
butt1.addEventListener("click", click1);
butt2.addEventListener("click", click2);
butt3.addEventListener("click", click3);
butt4.addEventListener("click", click4);
butt5.addEventListener("click", click5);

let num1 = null;
let num2 = null;

function click() {
    num1 = prompt("number");
    num2 = prompt("number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    parg.textContent = num1 + num2
};

function click1() {
    num1 = prompt("number");
    num2 = prompt("number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    parg.textContent = num1 - num2
};

function click2() {
    num1 = prompt("number");
    num2 = prompt("number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    parg.textContent = num1 * num2
};

function click3() {
    num1 = prompt("number");
    num2 = prompt("number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    parg.textContent = num1 / num2
};

function click4() {
    parg.textContent = "0"
};

function click5() {
    //
};