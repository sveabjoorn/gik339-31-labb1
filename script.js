// Uppgift 4 Skapar variabler
const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('#btn');
const dynamicDisplay = document.getElementById('dynamicDisplay');
const form = document.getElementById('settings');


// Uppgift 5 Funktionsdeklaration
function handleBlur(e) {
    e.preventDefault();
    const value = e.target.value;
    console.log('TextField', e);
}

// Uppgift 6
// Kopplar eventlyssnare för textfälten
textFields.forEach((field)=> {
    field.addEventListener('blur', handleBlur);
});
    
// Kopplar eventlyssnare för knappen
button.addEventListener('click', handleClick);

// Kopplar eventlyssnare för checkboxen
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



// Funktion för att hantera knappens click-event
function handleClick(e) {
    e.preventDefault();
    //querySelector hittar elementet med klassen new-element. remove tar bort elementet.
    //? =valfri kedjeoperator. Ser till att remove bara anropas om querySelector hittar ett giltigt element
    //annars händer ingenting
    dynamicDisplay.querySelector('.new-element')?.remove();  
}