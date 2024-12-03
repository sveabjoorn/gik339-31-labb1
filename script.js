const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('#btn');
const outputField = document.getElementById('output');
const form = document.getElementById('settings');

//Uppgift 5
//Lägger till en foreach-loop för att sätta en lyssnare på alla textfält i nodelistan. 
//Funktionen är en anonym? arrowfunktion?
//textFields.forEach((field) => field.addEventListener('input', handleInput));

textFields.forEach((field)=> {
    field.addEventListener('blur', handleBlur);
  });


for (let textfield of textFields) {
    if (textfield.name === 'color') {
        output.style.background = textfield.value;
    }
}



//Uppgift 6
    
// Lägger till eventlyssnare för knappen
button.addEventListener('click', (e) => 
    console.log('Knappen klickades')); 

// Lägger till eventlyssnare för checkboxen
checkBox.addEventListener('change', (e) => 
    console.log('Checkboxen ändrades')); {
        for (let textfield of textFields) {
            if (textfield.name === 'color') {
                output.style.background = textfield.value;
            }
        }
    }


// const output = document.getElementById('output');
//Funktionsdeklaration
function handleBlur(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;    
    //const html = `<p>Innehållet  ${name} har värdet ${value} </p>`;
    const html = `<p> ${value}</p>`;
    outputField.insertAdjacentHTML('beforeend', html);
    console.log('TextFields genererade eventet ', e);
}

//const dynamicDisplay = document.getElementById('dynamicDisplay');
function handleClick(e) {
    e.preventDefault();
    const targetName = e.target.id;
    const colorField = settings.color;
    const contentField = settings.content;
    console.log(targetName);


   // if(targetName === 'divStyle') {
        //const newElement = document.createElement('div');
        //newElement.classList.add('new-element');
        //newElement.style.backgroundColor = colorField.value;
        //newElement.innerHTML = contentField.value;
    

        //dynamicDisplay.insertAdjacentElement('beforeend', newElement);
   // }


}













// variabel test
console.log(button);
console.log(checkBox);
console.log(textFields);
console.log(output); 
