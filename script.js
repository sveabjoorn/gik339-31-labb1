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
    const name = e.target.name;
    const value = e.target.value;    
    const html = `<p>Innehållet  ${name} har värdet ${value} </p>`;
   // const html = `<p>${content}</p>`;
    output.insertAdjacentHTML('beforeend', html);
    console.log('TextFields genererade eventet ', e);
}

//Uppgift 6
    
// Lägger till eventlyssnare för knappen
button.addEventListener('click', (e) => 
    console.log('Knappen klickades'));

// Lägger till eventlyssnare för checkboxen
checkBox.addEventListener('change', (e) => 
    console.log('Checkboxen ändrades'));











// variabel test
console.log(button);
console.log(checkBox);
console.log(textFields);
console.log(output); 
