const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('#btn');
const outputField = document.getElementById('output');

//Uppgift 5
//Lägger till en foreach-loop för att sätta en lyssnare på alla textfält i nodelistan. 
//Funktionen är en anonym? arrowfunktion?
textFields.forEach((field) => field.addEventListener('blur', handleBlur));

const output = document.getElementById('output');
//Funktionsdeklaration
function handleBlur(e) {
    const color = e.target.color;
    const content = e.target.value;
    const html = `<p>Innehållet  ${content} har värdet ${color} </p>`;
   // const html = `<p>${content}</p>`;
    output.insertAdjacentHTML('beforeend', html);
    console.log('TextFields genererade eventet ', e);
}

//Uppgift 6
    










// variabel test
console.log(button);
console.log(checkBox);
console.log(textFields);
console.log(output); 
