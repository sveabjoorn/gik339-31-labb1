const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('#btn');
const outputField = document.getElementById('output');
const form = document.getElementById('settings');
const dynamicDisplay = document.getElementById('dynamicDisplay');
//Inputfälten
/*const settings = {
    color: document.getElementById('color'), // Fält för färg
    content: document.getElementById('content'), // Fält för innehåll
};*/

//Uppgift 5
//Lägger till en foreach-loop för att sätta en lyssnare på alla textfält i nodelistan. 
//Funktionen är en anonym? arrowfunktion?
//textFields.forEach((field) => field.addEventListener('input', handleInput));

textFields.forEach((field)=> {
    field.addEventListener('blur', handleBlur);
  });


/*for (let textfield of textFields) {
    if (textfield.name === 'color') {
        output.style.background = textfield.value;
    }
}*/

    

    /*const targetName = e.target.id;
    const colorField = settings.color;
    const contentField = settings.content;
    const dynamicDisplay = document.getElementById('dynamicDisplay');
    //console.log(targetName);*/


//Uppgift 6
    
// Lägger till eventlyssnare för knappen
button.addEventListener('click', handleClick); //=> 
   // console.log('Knappen klickades')); 

// Lägger till eventlyssnare för checkboxen
checkBox.addEventListener('change', handleCheckBoxChange);

function handleCheckBoxChange(e) {

    // Hämta värden från färg och innehåll
    const colorField = settings.color;
    const contentField = settings.content; 

    if(e.target.id === 'divStyle') {
        const newElement = document.createElement('div');
        newElement.classList.add('new-element');
        newElement.style.backgroundColor = colorField.value;
        newElement.innerHTML = contentField.value;    

        dynamicDisplay.insertAdjacentElement('beforeend', newElement);
    }
}

 
// const output = document.getElementById('output');
//Funktionsdeklaration
function handleBlur(e) {
    e.preventDefault();
    //const name = e.target.name;
    const value = e.target.value;    
    //const html = `<p>Innehållet  ${name} har värdet ${value} </p>`;
    const html = `<p> ${value}</p>`;
    outputField.insertAdjacentHTML('beforeend', html);
    console.log('TextFields genererade eventet ', e);
}

// Funktion för att hantera knappens click-event
function handleClick(e) {
    e.preventDefault();
    //querySelector hittar elementet med klassen new-element. remove tar bort elementet.
    dynamicDisplay.querySelector('.new-element').remove();




   
}













// variabel test
console.log(button);
console.log(checkBox);
console.log(textFields);
console.log(output); 
