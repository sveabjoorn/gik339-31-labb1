const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('#btn');
const dynamicDisplay = document.getElementById('dynamicDisplay');
const form = document.getElementById('settings');

// Lägger till eventlyssnare för textfälten
textFields.forEach((field)=> {
    field.addEventListener('blur', handleBlur);
});
    
// Lägger till eventlyssnare för knappen
button.addEventListener('click', handleClick);

// Lägger till eventlyssnare för checkboxen
checkBox.addEventListener('change', handleCheckBoxChange);


function handleCheckBoxChange(e) {

    // Hämta värden från färg och innehåll
    const colorField = settings.color;
    const contentField = settings.content; 

    // Kollar om det finns en div redan
    const existingDiv = dynamicDisplay.querySelector('.new-element');
    if (existingDiv) {
    existingDiv.remove();
    }

    if(e.target.id === 'divStyle') {
        const newElement = document.createElement('div');
        newElement.classList.add('new-element');
        newElement.style.backgroundColor = colorField.value;
        newElement.innerHTML = contentField.value;    

        dynamicDisplay.insertAdjacentElement('beforeend', newElement);      
    }
}

//Funktionsdeklaration
function handleBlur(e) {
    e.preventDefault();
    const value = e.target.value;
    console.log('TextFields genererade eventet ', e);
}

// Funktion för att hantera knappens click-event
function handleClick(e) {
    e.preventDefault();
    //querySelector hittar elementet med klassen new-element. remove tar bort elementet.
    dynamicDisplay.querySelector('.new-element').remove();  
}