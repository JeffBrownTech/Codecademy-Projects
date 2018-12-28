let itemOne = document.getElementById('list-item-1');
let itemTwo = document.getElementById('list-item-2');
let itemThree = document.getElementById('list-item-3');
let itemFour = document.getElementById('list-item-4');
let itemFive = document.getElementById('list-item-5');
let resetButton = document.getElementById('reset-button');

let reset = function() {
    itemOne.style.width = '400px';
    itemTwo.style.backgroundColor = 'midnightblue';
    itemThree.innerHTML = 'The mouse must leave box to change the text';
    itemFive.style.display = 'none';
}

resetButton.onclick = reset;

itemOne.onmouseover = function() {
    itemOne.style.width = '450px';
}

itemTwo.onmouseup = function() {
    itemTwo.style.backgroundColor = 'green';
}

itemThree.onmouseout = function() {
    itemThree.innerHTML = 'The mouse has left the element';
}

itemFour.onmousedown = function() {
    itemFive.style.display = block;
}