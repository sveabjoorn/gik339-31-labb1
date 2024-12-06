// Uppgift 4 Skapar variabler
const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('#btn');
const dynamicDisplay = document.getElementById('dynamicDisplay');
const form = document.getElementById('settings');


// Uppgift 5 Funktionsdeklaration för textfälten
function handleTextInput(e) {
    console.log('TextField');
    e.preventDefault();
    const value = e.target.value;    
}

// Uppgift 6
// Kopplar eventlyssnare för textfälten
textFields.forEach((field)=> {
    field.addEventListener('input', handleTextInput);
});
    
// Kopplar eventlyssnare och en anonym funktion för knappen
button.addEventListener('click', function(){
    e.preventDefault();
    //querySelector hittar elementet med klassen new-element. remove tar bort elementet.
    //? =valfri kedjeoperator. Ser till att remove bara anropas om querySelector hittar ett giltigt element
    //annars händer ingenting
    dynamicDisplay.querySelector('.new-element')?.remove();  
}); 

// Kopplar eventlyssnare och en anonym funktion för checkboxen
checkBox.addEventListener('change', function(e) {

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
});