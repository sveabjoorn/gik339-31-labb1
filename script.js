let checkBox = document.getElementById('divStyle');
let text = document.getElementsByClassName('textfield');
let button = document.querySelector('#btn');
let emptyDiv = document.getElementById('empty');

// variabel test
/* console.log(button);
console.log(checkBox);
console.log(text);
console.log(emptyDiv); */


// Uppgift 5
eventListener('ett', 'två');

function eventListener(param1, param2) {
    console.log('Funktion: eventListener, parametrar', param1, param2);
    return 'Returnerar ' + param1 + ' ' + param2;
}
console.log(eventListener('console','log'));